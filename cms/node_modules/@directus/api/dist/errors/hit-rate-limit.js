import { createError } from '@directus/errors';
import ms from 'ms';
import { ErrorCode } from './codes.js';
export const messageConstructor = (extensions) => {
    const msBeforeNext = extensions.reset.getTime() - Date.now();
    return `Too many requests, retry after ${ms(msBeforeNext)}.`;
};
export const HitRateLimitError = createError(ErrorCode.RequestsExceeded, messageConstructor, 429);
