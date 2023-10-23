export interface UnsupportedMediaTypeErrorExtensions {
    mediaType: string;
    where: string;
}
export declare const messageConstructor: (extensions: UnsupportedMediaTypeErrorExtensions) => string;
export declare const UnsupportedMediaTypeError: import("@directus/errors").DirectusErrorConstructor<UnsupportedMediaTypeErrorExtensions>;
