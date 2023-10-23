export interface RouteNotFoundErrorExtensions {
    path: string;
}
export declare const messageConstructor: ({ path }: RouteNotFoundErrorExtensions) => string;
export declare const RouteNotFoundError: import("@directus/errors").DirectusErrorConstructor<RouteNotFoundErrorExtensions>;
