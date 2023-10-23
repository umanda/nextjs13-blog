import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
const messageConstructor = (extensions) => `Can't process content. ${extensions.reason}.`;
export const UnprocessableContentError = createError(ErrorCode.UnprocessableContent, messageConstructor, 422);
