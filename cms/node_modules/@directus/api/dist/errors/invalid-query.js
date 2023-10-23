import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ reason }) => `Invalid query. ${reason}.`;
export const InvalidQueryError = createError(ErrorCode.InvalidQuery, messageConstructor, 400);
