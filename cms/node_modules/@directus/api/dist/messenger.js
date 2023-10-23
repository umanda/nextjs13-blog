import { parseJSON } from '@directus/utils';
import { Redis } from 'ioredis';
import { getEnv } from './env.js';
import { getConfigFromEnv } from './utils/get-config-from-env.js';
export class MessengerMemory {
    handlers;
    constructor() {
        this.handlers = {};
    }
    publish(channel, payload) {
        this.handlers[channel]?.forEach((callback) => callback(payload));
    }
    subscribe(channel, callback) {
        if (!this.handlers[channel])
            this.handlers[channel] = new Set();
        this.handlers[channel]?.add(callback);
    }
    unsubscribe(channel, callback) {
        if (!callback) {
            delete this.handlers[channel];
        }
        else {
            this.handlers[channel]?.delete(callback);
        }
    }
}
export class MessengerRedis {
    namespace;
    pub;
    sub;
    constructor() {
        const config = getConfigFromEnv('REDIS');
        const env = getEnv();
        this.pub = new Redis(env['REDIS'] ?? config);
        this.sub = new Redis(env['REDIS'] ?? config);
        this.namespace = env['MESSENGER_NAMESPACE'] ?? 'directus-messenger';
    }
    publish(channel, payload) {
        this.pub.publish(`${this.namespace}:${channel}`, JSON.stringify(payload));
    }
    subscribe(channel, callback) {
        this.sub.subscribe(`${this.namespace}:${channel}`);
        this.sub.on('message', (messageChannel, payloadString) => {
            const payload = parseJSON(payloadString);
            if (messageChannel === `${this.namespace}:${channel}`) {
                callback(payload);
            }
        });
    }
    unsubscribe(channel) {
        this.sub.unsubscribe(`${this.namespace}:${channel}`);
    }
}
let messenger;
export function getMessenger() {
    if (messenger)
        return messenger;
    const env = getEnv();
    if (env['MESSENGER_STORE'] === 'redis') {
        messenger = new MessengerRedis();
    }
    else {
        messenger = new MessengerMemory();
    }
    return messenger;
}
