export interface RecordNotUniqueErrorExtensions {
    collection: string | null;
    field: string | null;
}
export declare const messageConstructor: ({ collection, field }: RecordNotUniqueErrorExtensions) => string;
export declare const RecordNotUniqueError: import("@directus/errors").DirectusErrorConstructor<RecordNotUniqueErrorExtensions>;
