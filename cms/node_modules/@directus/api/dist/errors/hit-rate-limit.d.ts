export interface HitRateLimitErrorExtensions {
    limit: number;
    reset: Date;
}
export declare const messageConstructor: (extensions: HitRateLimitErrorExtensions) => string;
export declare const HitRateLimitError: import("@directus/errors").DirectusErrorConstructor<HitRateLimitErrorExtensions>;
