export interface MethodNotAllowedErrorExtensions {
    allowed: string[];
    current: string;
}
export declare const messageConstructor: (extensions: MethodNotAllowedErrorExtensions) => string;
export declare const MethodNotAllowedError: import("@directus/errors").DirectusErrorConstructor<MethodNotAllowedErrorExtensions>;
