import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ service, reason }) => `Service "${service}" is unavailable. ${reason}.`;
export const ServiceUnavailableError = createError(ErrorCode.ServiceUnavailable, messageConstructor, 503);
