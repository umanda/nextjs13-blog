import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = (extensions) => `Invalid method "${extensions.current}" used. Should be one of ${extensions.allowed
    .map((method) => `"${method}"`)
    .join(', ')}.`;
export const MethodNotAllowedError = createError(ErrorCode.MethodNotAllowed, messageConstructor, 405);
