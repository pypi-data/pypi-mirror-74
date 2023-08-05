from abc import ABC, abstractmethod
from typing import List, NewType
import logging

from vkwave.bots.core.dispatching.events.base import BaseEvent

MiddlewareResult = NewType("MiddlewareResult", bool)

class BaseMiddleware(ABC):
    @abstractmethod
    async def pre_process_event(self, event: BaseEvent) -> MiddlewareResult:
        ...

    async def post_process_event(self, event: BaseEvent):
        pass

class MiddlewareManager:
    def __init__(self):
        self.middlewares: List[BaseMiddleware] = []

    def add_middleware(self, middleware: BaseMiddleware):
        self.middlewares.append(middleware)

    async def execute_pre_process_event(self, event: BaseEvent) -> MiddlewareResult:
        for middleware in self.middlewares:
            m_res = await middleware.pre_process_event(event)
            if not m_res:
                return MiddlewareResult(False)
        return MiddlewareResult(True)

    async def execute_post_process_event(self, event: BaseEvent):
        for middleware in self.middlewares:
            await middleware.post_process_event(event)
