import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const IllegalAssetTransformationError = createError(ErrorCode.IllegalAssetTransformation, 'Illegal asset transformation.', 400);
