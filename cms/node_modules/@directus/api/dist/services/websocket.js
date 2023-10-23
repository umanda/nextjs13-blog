import { getWebSocketController } from '../websocket/controllers/index.js';
import emitter from '../emitter.js';
export class WebSocketService {
    controller;
    constructor() {
        this.controller = getWebSocketController();
    }
    on(event, callback) {
        emitter.onAction('websocket.' + event, callback);
    }
    off(event, callback) {
        emitter.offAction('websocket.' + event, callback);
    }
    broadcast(message, filter) {
        this.controller.clients.forEach((client) => {
            if (filter && filter.user && filter.user !== client.accountability?.user)
                return;
            if (filter && filter.role && filter.role !== client.accountability?.role)
                return;
            client.send(typeof message === 'string' ? message : JSON.stringify(message));
        });
    }
    clients() {
        return this.controller.clients;
    }
}
