import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = (extensions) => `Unsupported media type "${extensions.mediaType}" in ${extensions.where}.`;
export const UnsupportedMediaTypeError = createError(ErrorCode.UnsupportedMediaType, messageConstructor, 415);
