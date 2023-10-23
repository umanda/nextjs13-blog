import type { RequestHandler } from 'express';
import type { PressureMonitorOptions } from './monitor.js';
export declare const handlePressure: (options: PressureMonitorOptions & {
    error?: Error;
    retryAfter?: string;
}) => RequestHandler;
