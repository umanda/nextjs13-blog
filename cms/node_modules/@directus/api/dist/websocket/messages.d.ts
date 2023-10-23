import type { Item, Query } from '@directus/types';
import { z } from 'zod';
export declare const WebSocketMessage: z.ZodObject<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
}, z.ZodTypeAny, "passthrough">>;
export type WebSocketMessage = z.infer<typeof WebSocketMessage>;
export declare const WebSocketResponse: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    status: z.ZodLiteral<"ok">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    status: z.ZodLiteral<"ok">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    status: z.ZodLiteral<"ok">;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    status: z.ZodLiteral<"error">;
    error: z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    status: z.ZodLiteral<"error">;
    error: z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    type: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    status: z.ZodLiteral<"error">;
    error: z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        code: z.ZodString;
        message: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>;
}, z.ZodTypeAny, "passthrough">>]>;
export type WebSocketResponse = z.infer<typeof WebSocketResponse>;
export declare const ConnectionParams: z.ZodObject<{
    access_token: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    access_token?: string | undefined;
}, {
    access_token?: string | undefined;
}>;
export type ConnectionParams = z.infer<typeof ConnectionParams>;
export declare const BasicAuthMessage: z.ZodUnion<[z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>, z.ZodObject<{
    access_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    access_token: string;
}, {
    access_token: string;
}>, z.ZodObject<{
    refresh_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    refresh_token: string;
}, {
    refresh_token: string;
}>]>;
export type BasicAuthMessage = z.infer<typeof BasicAuthMessage>;
export declare const WebSocketAuthMessage: z.ZodIntersection<z.ZodObject<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"auth">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"auth">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"auth">;
}, z.ZodTypeAny, "passthrough">>, z.ZodUnion<[z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>, z.ZodObject<{
    access_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    access_token: string;
}, {
    access_token: string;
}>, z.ZodObject<{
    refresh_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    refresh_token: string;
}, {
    refresh_token: string;
}>]>>;
export type WebSocketAuthMessage = z.infer<typeof WebSocketAuthMessage>;
export declare const WebSocketSubscribeMessage: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"subscribe">;
    collection: z.ZodString;
    event: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"create">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">]>>;
    item: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    query: z.ZodOptional<z.ZodType<Query, z.ZodTypeDef, Query>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"subscribe">;
    collection: z.ZodString;
    event: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"create">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">]>>;
    item: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    query: z.ZodOptional<z.ZodType<Query, z.ZodTypeDef, Query>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"subscribe">;
    collection: z.ZodString;
    event: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"create">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">]>>;
    item: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    query: z.ZodOptional<z.ZodType<Query, z.ZodTypeDef, Query>>;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"unsubscribe">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"unsubscribe">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    type: z.ZodLiteral<"unsubscribe">;
}, z.ZodTypeAny, "passthrough">>]>;
export type WebSocketSubscribeMessage = z.infer<typeof WebSocketSubscribeMessage>;
export declare const WebSocketItemsMessage: z.ZodUnion<[z.ZodObject<{
    type: z.ZodLiteral<"items">;
    collection: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    action: z.ZodLiteral<"create">;
    data: z.ZodUnion<[z.ZodArray<z.ZodType<Partial<Item>, z.ZodTypeDef, Partial<Item>>, "many">, z.ZodType<Partial<Item>, z.ZodTypeDef, Partial<Item>>]>;
    query: z.ZodOptional<z.ZodType<Query, z.ZodTypeDef, Query>>;
}, "strip", z.ZodTypeAny, {
    type: "items";
    action: "create";
    data: (Partial<Item> | Partial<Item>[]) & (Partial<Item> | Partial<Item>[] | undefined);
    collection: string;
    uid?: string | number | undefined;
    query?: Query | undefined;
}, {
    type: "items";
    action: "create";
    data: (Partial<Item> | Partial<Item>[]) & (Partial<Item> | Partial<Item>[] | undefined);
    collection: string;
    uid?: string | number | undefined;
    query?: Query | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"items">;
    collection: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    action: z.ZodLiteral<"read">;
    ids: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    query: z.ZodOptional<z.ZodType<Query, z.ZodTypeDef, Query>>;
}, "strip", z.ZodTypeAny, {
    type: "items";
    action: "read";
    collection: string;
    uid?: string | number | undefined;
    ids?: (string | number)[] | undefined;
    id?: string | number | undefined;
    query?: Query | undefined;
}, {
    type: "items";
    action: "read";
    collection: string;
    uid?: string | number | undefined;
    ids?: (string | number)[] | undefined;
    id?: string | number | undefined;
    query?: Query | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"items">;
    collection: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    action: z.ZodLiteral<"update">;
    data: z.ZodType<Partial<Item>, z.ZodTypeDef, Partial<Item>>;
    ids: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    query: z.ZodOptional<z.ZodType<Query, z.ZodTypeDef, Query>>;
}, "strip", z.ZodTypeAny, {
    type: "items";
    action: "update";
    data: Partial<Item>;
    collection: string;
    uid?: string | number | undefined;
    ids?: (string | number)[] | undefined;
    id?: string | number | undefined;
    query?: Query | undefined;
}, {
    type: "items";
    action: "update";
    data: Partial<Item>;
    collection: string;
    uid?: string | number | undefined;
    ids?: (string | number)[] | undefined;
    id?: string | number | undefined;
    query?: Query | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"items">;
    collection: z.ZodString;
    uid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    action: z.ZodLiteral<"delete">;
    ids: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">>;
    id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    query: z.ZodOptional<z.ZodType<Query, z.ZodTypeDef, Query>>;
}, "strip", z.ZodTypeAny, {
    type: "items";
    action: "delete";
    collection: string;
    uid?: string | number | undefined;
    ids?: (string | number)[] | undefined;
    id?: string | number | undefined;
    query?: Query | undefined;
}, {
    type: "items";
    action: "delete";
    collection: string;
    uid?: string | number | undefined;
    ids?: (string | number)[] | undefined;
    id?: string | number | undefined;
    query?: Query | undefined;
}>]>;
export type WebSocketItemsMessage = z.infer<typeof WebSocketItemsMessage>;
export declare const WebSocketEvent: z.ZodDiscriminatedUnion<"action", [z.ZodObject<{
    action: z.ZodLiteral<"create">;
    collection: z.ZodString;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    key: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
}, "strip", z.ZodTypeAny, {
    key: string | number;
    action: "create";
    collection: string;
    payload?: Record<string, any> | undefined;
}, {
    key: string | number;
    action: "create";
    collection: string;
    payload?: Record<string, any> | undefined;
}>, z.ZodObject<{
    action: z.ZodLiteral<"update">;
    collection: z.ZodString;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    keys: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "update";
    keys: (string | number)[];
    collection: string;
    payload?: Record<string, any> | undefined;
}, {
    action: "update";
    keys: (string | number)[];
    collection: string;
    payload?: Record<string, any> | undefined;
}>, z.ZodObject<{
    action: z.ZodLiteral<"delete">;
    collection: z.ZodString;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    keys: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "delete";
    keys: (string | number)[];
    collection: string;
    payload?: Record<string, any> | undefined;
}, {
    action: "delete";
    keys: (string | number)[];
    collection: string;
    payload?: Record<string, any> | undefined;
}>]>;
export type WebSocketEvent = z.infer<typeof WebSocketEvent>;
export declare const AuthMode: z.ZodUnion<[z.ZodLiteral<"public">, z.ZodLiteral<"handshake">, z.ZodLiteral<"strict">]>;
export type AuthMode = z.infer<typeof AuthMode>;
