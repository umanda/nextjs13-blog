interface ContainsNullValuesErrorExtensions {
    collection: string;
    field: string;
}
export declare const messageConstructor: ({ collection, field }: ContainsNullValuesErrorExtensions) => string;
export declare const ContainsNullValuesError: import("@directus/errors").DirectusErrorConstructor<ContainsNullValuesErrorExtensions>;
export {};
