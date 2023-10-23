import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ range }) => {
    const rangeString = `"${range.start ?? ''}-${range.end ?? ''}"`;
    return `Range ${rangeString} is invalid or the file's size doesn't match the requested range.`;
};
export const RangeNotSatisfiableError = createError(ErrorCode.RangeNotSatisfiable, messageConstructor, 416);
