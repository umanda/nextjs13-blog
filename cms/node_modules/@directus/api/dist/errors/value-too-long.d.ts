export interface ValueTooLongErrorExtensions {
    collection: string | null;
    field: string | null;
}
export declare const messageConstructor: ({ collection, field }: ValueTooLongErrorExtensions) => string;
export declare const ValueTooLongError: import("@directus/errors").DirectusErrorConstructor<ValueTooLongErrorExtensions>;
