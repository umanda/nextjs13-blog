/**
 * Convert environment variable to Boolean
 */
export function toBoolean(value) {
    return value === 'true' || value === true || value === '1' || value === 1;
}
