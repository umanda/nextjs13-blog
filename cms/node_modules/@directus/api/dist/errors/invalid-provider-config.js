import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const InvalidProviderConfigError = createError(ErrorCode.InvalidProviderConfig, 'Invalid config.', 503);
