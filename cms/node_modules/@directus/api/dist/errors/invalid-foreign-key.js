import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ collection, field }) => {
    let message = 'Invalid foreign key';
    if (field) {
        message += ` for field "${field}"`;
    }
    if (collection) {
        message += ` in collection "${collection}"`;
    }
    message += `.`;
    return message;
};
export const InvalidForeignKeyError = createError(ErrorCode.InvalidForeignKey, messageConstructor, 400);
