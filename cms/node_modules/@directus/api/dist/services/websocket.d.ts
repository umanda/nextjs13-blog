import type { ActionHandler } from '@directus/types';
import type { WebSocketClient } from '../websocket/types.js';
import type { WebSocketMessage } from '../websocket/messages.js';
export declare class WebSocketService {
    private controller;
    constructor();
    on(event: 'connect' | 'message' | 'error' | 'close', callback: ActionHandler): void;
    off(event: 'connect' | 'message' | 'error' | 'close', callback: ActionHandler): void;
    broadcast(message: string | WebSocketMessage, filter?: {
        user?: string;
        role?: string;
    }): void;
    clients(): Set<WebSocketClient>;
}
