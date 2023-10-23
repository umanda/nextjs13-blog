import { PressureMonitor } from './monitor.js';
export const handlePressure = (options) => {
    const monitor = new PressureMonitor(options);
    return (_req, res, next) => {
        if (monitor.overloaded) {
            if (options.retryAfter) {
                res.header('Retry-After', options.retryAfter);
            }
            return next(options?.error ?? new Error('Pressure limit exceeded'));
        }
        return next();
    };
};
