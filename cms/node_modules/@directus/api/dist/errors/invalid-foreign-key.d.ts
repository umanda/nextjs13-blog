export interface InvalidForeignKeyErrorExtensions {
    collection: string | null;
    field: string | null;
}
export declare const messageConstructor: ({ collection, field }: InvalidForeignKeyErrorExtensions) => string;
export declare const InvalidForeignKeyError: import("@directus/errors").DirectusErrorConstructor<InvalidForeignKeyErrorExtensions>;
