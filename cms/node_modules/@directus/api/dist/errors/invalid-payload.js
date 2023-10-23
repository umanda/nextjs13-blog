import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ reason }) => `Invalid payload. ${reason}.`;
export const InvalidPayloadError = createError(ErrorCode.InvalidPayload, messageConstructor, 400);
