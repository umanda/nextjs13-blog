import { Redis } from 'ioredis';
export type MessengerSubscriptionCallback = (payload: Record<string, any>) => void;
export interface Messenger {
    publish: (channel: string, payload: Record<string, any>) => void;
    subscribe: (channel: string, callback: MessengerSubscriptionCallback) => void;
    unsubscribe: (channel: string, callback?: MessengerSubscriptionCallback) => void;
}
export declare class MessengerMemory implements Messenger {
    handlers: Record<string, Set<MessengerSubscriptionCallback>>;
    constructor();
    publish(channel: string, payload: Record<string, any>): void;
    subscribe(channel: string, callback: MessengerSubscriptionCallback): void;
    unsubscribe(channel: string, callback?: MessengerSubscriptionCallback): void;
}
export declare class MessengerRedis implements Messenger {
    namespace: string;
    pub: Redis;
    sub: Redis;
    constructor();
    publish(channel: string, payload: Record<string, any>): void;
    subscribe(channel: string, callback: MessengerSubscriptionCallback): void;
    unsubscribe(channel: string): void;
}
export declare function getMessenger(): Messenger;
