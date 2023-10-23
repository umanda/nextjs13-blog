export interface InvalidPayloadErrorExtensions {
    reason: string;
}
export declare const messageConstructor: ({ reason }: InvalidPayloadErrorExtensions) => string;
export declare const InvalidPayloadError: import("@directus/errors").DirectusErrorConstructor<InvalidPayloadErrorExtensions>;
