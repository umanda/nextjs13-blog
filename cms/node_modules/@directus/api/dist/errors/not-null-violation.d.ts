export interface NotNullViolationErrorExtensions {
    collection: string | null;
    field: string | null;
}
export declare const messageConstructor: ({ collection, field }: NotNullViolationErrorExtensions) => string;
export declare const NotNullViolationError: import("@directus/errors").DirectusErrorConstructor<NotNullViolationErrorExtensions>;
