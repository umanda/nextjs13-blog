import type { Range } from '@directus/storage';
interface RangeNotSatisfiableErrorExtensions {
    range: Range;
}
export declare const messageConstructor: ({ range }: RangeNotSatisfiableErrorExtensions) => string;
export declare const RangeNotSatisfiableError: import("@directus/errors").DirectusErrorConstructor<RangeNotSatisfiableErrorExtensions>;
export {};
