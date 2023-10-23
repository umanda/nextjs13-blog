import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ path }) => `Route ${path} doesn't exist.`;
export const RouteNotFoundError = createError(ErrorCode.RouteNotFound, messageConstructor, 404);
