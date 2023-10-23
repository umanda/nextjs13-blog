import { createError } from '@directus/errors';
import { ErrorCode } from './codes.js';
export const messageConstructor = ({ collection, field }) => `Field "${field}" in collection "${collection}" contains null values.`;
export const ContainsNullValuesError = createError(ErrorCode.ContainsNullValues, messageConstructor, 400);
