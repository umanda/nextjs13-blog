/// <reference types="node" resolution-mode="require"/>
import type { Driver, Range } from '@directus/storage';
import { Readable } from 'node:stream';
export type DriverSupabaseConfig = {
    bucket: string;
    serviceRole: string;
    projectId?: string;
    endpoint?: string;
    root?: string;
};
export declare class DriverSupabase implements Driver {
    private config;
    private client;
    private bucket;
    constructor(config: DriverSupabaseConfig);
    private get endpoint();
    private getClient;
    private getBucket;
    private getFullPath;
    private getAuthenticatedUrl;
    read(filepath: string, range?: Range): Promise<Readable>;
    head(filepath: string): Promise<import("undici").Headers>;
    stat(filepath: string): Promise<{
        size: number;
        modified: Date;
    }>;
    exists(filepath: string): Promise<boolean>;
    move(src: string, dest: string): Promise<void>;
    copy(src: string, dest: string): Promise<void>;
    write(filepath: string, content: Readable, type?: string): Promise<void>;
    delete(filepath: string): Promise<void>;
    list(prefix?: string): AsyncGenerator<string, void, unknown>;
}
export default DriverSupabase;
