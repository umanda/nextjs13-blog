export function sanitizeError(error) {
    // clear the stack
    if (error.stack !== undefined) {
        delete error.stack;
    }
    return error;
}
