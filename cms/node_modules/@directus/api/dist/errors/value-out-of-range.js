import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ collection, field }) => {
    let message = 'Numeric value ';
    if (field) {
        message += `for field "${field}" `;
    }
    if (collection) {
        message += `in collection "${collection}" `;
    }
    message += `is out of range.`;
    return message;
};
export const ValueOutOfRangeError = createError(ErrorCode.ValueOutOfRange, messageConstructor, 400);
