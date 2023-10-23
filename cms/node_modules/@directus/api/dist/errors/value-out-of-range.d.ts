export interface ValueOutOfRangeErrorExtensions {
    collection: string | null;
    field: string | null;
}
export declare const messageConstructor: ({ collection, field }: ValueOutOfRangeErrorExtensions) => string;
export declare const ValueOutOfRangeError: import("@directus/errors").DirectusErrorConstructor<ValueOutOfRangeErrorExtensions>;
