import { merge } from 'lodash-es';
import { RateLimiterMemory, RateLimiterRedis } from 'rate-limiter-flexible';
import env from './env.js';
import { getConfigFromEnv } from './utils/get-config-from-env.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
export function createRateLimiter(configPrefix = 'RATE_LIMITER', configOverrides) {
    switch (env['RATE_LIMITER_STORE']) {
        case 'redis':
            return new RateLimiterRedis(getConfig('redis', configPrefix, configOverrides));
        case 'memory':
        default:
            return new RateLimiterMemory(getConfig('memory', configPrefix, configOverrides));
    }
}
function getConfig(store = 'memory', configPrefix = 'RATE_LIMITER', overrides) {
    const config = getConfigFromEnv(`${configPrefix}_`, `${configPrefix}_${store}_`);
    if (store === 'redis') {
        const Redis = require('ioredis');
        config.storeClient = new Redis(env[`REDIS`] || getConfigFromEnv(`REDIS_`));
    }
    delete config.enabled;
    delete config.store;
    merge(config, overrides || {});
    return config;
}
