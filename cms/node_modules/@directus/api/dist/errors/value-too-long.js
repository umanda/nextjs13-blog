import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ collection, field }) => {
    let message = 'Value ';
    if (field) {
        message += `for field "${field}" `;
    }
    if (collection) {
        message += `in collection "${collection}" `;
    }
    message += `is too long.`;
    return message;
};
export const ValueTooLongError = createError(ErrorCode.ValueTooLong, messageConstructor, 400);
