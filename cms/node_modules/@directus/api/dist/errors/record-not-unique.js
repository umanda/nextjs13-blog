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
    message += `has to be unique.`;
    return message;
};
export const RecordNotUniqueError = createError(ErrorCode.RecordNotUnique, messageConstructor, 400);
