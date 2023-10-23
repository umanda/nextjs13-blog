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
    message += `can't be null.`;
    return message;
};
export const NotNullViolationError = createError(ErrorCode.NotNullViolation, messageConstructor, 400);
