import { normalizePath } from '@directus/utils';
import { StorageClient } from '@supabase/storage-js';
import { join } from 'node:path';
import { Readable } from 'node:stream';
import { fetch } from 'undici';
export class DriverSupabase {
    config;
    client;
    bucket;
    constructor(config) {
        this.config = config;
        this.client = this.getClient();
        this.bucket = this.getBucket();
    }
    get endpoint() {
        return this.config.endpoint ?? `https://${this.config.projectId}.supabase.co/storage/v1`;
    }
    getClient() {
        if (!this.config.projectId && !this.config.endpoint) {
            throw new Error('`project_id` or `endpoint` is required');
        }
        if (!this.config.serviceRole) {
            throw new Error('`service_role` is required');
        }
        return new StorageClient(this.endpoint, {
            apikey: this.config.serviceRole,
            Authorization: `Bearer ${this.config.serviceRole}`,
        });
    }
    getBucket() {
        if (!this.config.bucket) {
            throw new Error('`bucket` is required');
        }
        return this.client.from(this.config.bucket);
    }
    getFullPath(filepath) {
        return this.config.root ? normalizePath(join(this.config.root, filepath)) : filepath;
    }
    getAuthenticatedUrl(filepath) {
        return `${this.endpoint}/${join('object/authenticated', this.config.bucket, this.getFullPath(filepath))}`;
    }
    async read(filepath, range) {
        const requestInit = { method: 'GET' };
        requestInit.headers = {
            Authorization: `Bearer ${this.config.serviceRole}`,
        };
        if (range) {
            requestInit.headers['Range'] = `bytes=${range.start ?? ''}-${range.end ?? ''}`;
        }
        const response = await fetch(this.getAuthenticatedUrl(filepath), requestInit);
        if (response.status >= 400 || !response.body) {
            throw new Error(`No stream returned for file "${filepath}"`);
        }
        return Readable.fromWeb(response.body);
    }
    async head(filepath) {
        const response = await fetch(this.getAuthenticatedUrl(filepath), {
            method: 'HEAD',
            headers: {
                Authorization: `Bearer ${this.config.serviceRole}`,
            },
        });
        if (response.status >= 400) {
            throw new Error('File not found');
        }
        return response.headers;
    }
    async stat(filepath) {
        const headers = await this.head(filepath);
        return {
            size: parseInt(headers.get('content-length') || ''),
            modified: new Date(headers.get('last-modified') || ''),
        };
    }
    async exists(filepath) {
        try {
            await this.stat(filepath);
            return true;
        }
        catch {
            return false;
        }
    }
    async move(src, dest) {
        await this.bucket.move(this.getFullPath(src), this.getFullPath(dest));
    }
    async copy(src, dest) {
        await this.bucket.copy(this.getFullPath(src), this.getFullPath(dest));
    }
    async write(filepath, content, type) {
        await this.bucket.upload(this.getFullPath(filepath), content, {
            contentType: type ?? '',
            cacheControl: '3600',
            upsert: true,
            duplex: 'half',
        });
    }
    async delete(filepath) {
        await this.bucket.remove([this.getFullPath(filepath)]);
    }
    async *list(prefix = '') {
        const limit = 1000;
        let offset = 0;
        let itemCount = 0;
        do {
            const { data, error } = await this.bucket.list(this.config.root, { limit, offset, search: prefix });
            if (!data || error) {
                break;
            }
            itemCount = data.length;
            offset += itemCount;
            for (const item of data) {
                yield item.name;
            }
        } while (itemCount === limit);
    }
}
export default DriverSupabase;
