/// <reference types="qs" />
import type { RequestHandler } from 'express';
import type { LoggerOptions } from 'pino';
export declare const httpLoggerOptions: LoggerOptions;
declare const logger: import("pino").Logger<LoggerOptions & Record<string, any>>;
export declare const expressLogger: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export default logger;
