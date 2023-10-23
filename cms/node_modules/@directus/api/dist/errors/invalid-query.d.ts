export interface InvalidQueryErrorExtensions {
    reason: string;
}
export declare const messageConstructor: ({ reason }: InvalidQueryErrorExtensions) => string;
export declare const InvalidQueryError: import("@directus/errors").DirectusErrorConstructor<InvalidQueryErrorExtensions>;
