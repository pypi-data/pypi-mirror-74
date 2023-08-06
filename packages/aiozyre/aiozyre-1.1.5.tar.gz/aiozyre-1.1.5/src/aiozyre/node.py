
import asyncio
import signal

from typing import Union, Mapping, Iterable, Set

from .exceptions import StartFailed, StopFailed

from . import futures
from . import nodeactor
from . import nodeconfig
from . import messages


class Node:
    __slots__ = ('config', 'loop', 'running', 'startstoplock', 'actor')

    def __init__(
        self,
        name: str, *,
        headers: Mapping = None,
        groups: Union[None, Iterable[str]] = None,
        endpoint: str = None,
        gossip_endpoint: str = None,
        interface: str = None,
        evasive_timeout_ms: int = 5000,
        expired_timeout_ms: int = 30000,
        verbose: bool = False,
        loop: asyncio.AbstractEventLoop = None
    ):
        """
        Constructor, creates a new Zyre node. Note that until you start the
        node it is silent and invisible to other nodes on the network.
        The node name is provided to other nodes during discovery.
        """
        self.actor = None
        if loop is None:
            loop = asyncio.get_event_loop()
        self.loop = loop
        self.startstoplock = asyncio.Lock()
        self.config = nodeconfig.NodeConfig(
            name=name, headers=headers, groups=groups, endpoint=endpoint, gossip_endpoint=gossip_endpoint,
            interface=interface, evasive_timeout_ms=evasive_timeout_ms, expired_timeout_ms=expired_timeout_ms,
            verbose=verbose
        )
        self.running = False

    @property
    def name(self):
        return self.config.name

    @property
    def uuid(self):
        return self.actor.uuid

    def __str__(self) -> str:
        return self.name

    def __hash__(self) -> int:
        return hash(self.uuid)

    async def start(self):
        """
        Start node, after setting header values. When you start a node it
        begins discovery and connection. Returns 0 if OK, -1 if it wasn't
        possible to start the node.
        """
        async with self.startstoplock:
            if self.running:
                raise StartFailed('Node already running')
            self.actor = nodeactor.NodeActor(config=self.config, loop=self.loop)
            self.loop.add_signal_handler(signal.SIGINT, self.stop_sync)
            self.loop.add_signal_handler(signal.SIGABRT, self.stop_sync)
            self.actor.start()
            await self.actor.started
            self.running = True

    async def stop(self):
        """
        Stop node; this signals to other peers that this node will go away.
        This is polite; however you can also just destroy the node without
        stopping it.
        """
        async with self.startstoplock:
            if not self.running:
                raise StopFailed('Node not running')
            self.actor.stop()
            await self.actor.stopped
            self.running = False
            self.loop.remove_signal_handler(signal.SIGINT)
            self.loop.remove_signal_handler(signal.SIGABRT)

    def stop_sync(self):
        yield from self.stop().__await__()

    async def recv(self, timeout: int = None) -> messages.Msg:
        """
        Receive next message from network; the message may be a control
        message (ENTER, EXIT, JOIN, LEAVE) or data (WHISPER, SHOUT).
        Returns Msg object, or NULL if interrupted

        Note that having multiple tasks consuming from recv() will result in
        skipped messages, as each recv() task will destructively pop items from the queue.

        This method is *not* thread safe and should only be called from the event loop thread.
        """
        msg = await asyncio.wait_for(asyncio.ensure_future(self.actor.outbox.get()), timeout=timeout)
        self.actor.outbox.task_done()
        if isinstance(msg, Exception):
            raise msg
        return msg

    async def shout(self, group: str, blob: Union[bytes, str]):
        """
        Send message to a group
        """
        if isinstance(blob, str):
            blob = blob.encode('utf8')
        fut = futures.ShoutFuture(group=group, blob=blob, loop=self.loop)
        self.actor.give(fut)
        await asyncio.ensure_future(fut)

    async def whisper(self, peer: str, blob: Union[bytes, str]):
        """
        Send message to single peer, specified as a UUID string
        """
        if isinstance(blob, str):
            blob = blob.encode('utf8')
        fut = futures.WhisperFuture(peer=peer, blob=blob, loop=self.loop)
        self.actor.give(fut)
        await asyncio.ensure_future(fut)

    async def join(self, group: str):
        """
        Join a named group; after joining a group you can send messages to
        the group and all Zyre nodes in that group will receive them.
        """
        fut = futures.JoinFuture(group=group, loop=self.loop)
        self.actor.give(fut)
        await asyncio.ensure_future(fut)

    async def leave(self, group: str):
        """
        Leave a named group
        """
        fut = futures.LeaveFuture(group=group, loop=self.loop)
        self.actor.give(fut)
        await asyncio.ensure_future(fut)

    async def peers(self) -> Set[str]:
        """
        Return set of current peer ids.
        """
        fut = futures.PeersFuture(loop=self.loop)
        self.actor.give(fut)
        return await asyncio.ensure_future(fut)

    async def peers_by_group(self, group: str) -> Set[str]:
        """
        Return set of current peers of this group.
        """
        fut = futures.PeersByGroupFuture(group=group, loop=self.loop)
        self.actor.give(fut)
        return await asyncio.ensure_future(fut)

    async def own_groups(self) -> Set[str]:
        """
        Return set of currently joined groups.
        """
        fut = futures.OwnGroupsFuture(loop=self.loop)
        self.actor.give(fut)
        return await asyncio.ensure_future(fut)

    async def peer_groups(self) -> Set[str]:
        """
        Return set of groups known through connected peers.
        """
        fut = futures.PeerGroupsFuture(loop=self.loop)
        self.actor.give(fut)
        return await asyncio.ensure_future(fut)

    async def peer_header_value(self, peer: str, header: str) -> str:
        """
        Return the value of a header of a connected peer.
        Returns null if peer or key doesn't exits.
        """
        fut = futures.PeerHeaderValueFuture(peer=peer, header=header, loop=self.loop)
        self.actor.give(fut)
        return await asyncio.ensure_future(fut)
