export interface InvalidProviderConfigErrorExtensions {
    provider: string;
    reason?: string;
}
export declare const InvalidProviderConfigError: import("@directus/errors").DirectusErrorConstructor<InvalidProviderConfigErrorExtensions>;
