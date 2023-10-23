interface ServiceUnavailableErrorExtensions {
    service: string;
    reason: string;
}
export declare const messageConstructor: ({ service, reason }: ServiceUnavailableErrorExtensions) => string;
export declare const ServiceUnavailableError: import("@directus/errors").DirectusErrorConstructor<ServiceUnavailableErrorExtensions>;
export {};
