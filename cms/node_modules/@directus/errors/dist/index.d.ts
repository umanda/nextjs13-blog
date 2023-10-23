interface DirectusError<Extensions = void> extends Error {
    extensions: Extensions;
    code: string;
    status: number;
}
interface DirectusErrorConstructor<Extensions = void> {
    new (extensions: Extensions, options?: ErrorOptions): DirectusError<Extensions>;
    readonly prototype: DirectusError<Extensions>;
}
declare const createError: <Extensions = void>(code: string, message: string | ((extensions: Extensions) => string), status?: number) => DirectusErrorConstructor<Extensions>;

/**
 * Check whether or not a passed thing is a valid Directus error
 *
 * @param err - Any input
 */
declare const isDirectusError: <T = unknown>(err: unknown, code?: string) => err is DirectusError<T>;

export { DirectusError, DirectusErrorConstructor, createError, isDirectusError };
