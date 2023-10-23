import { getService } from '../../utils/get-service.js';
import { CollectionsService, FieldsService, MetaService } from '../../services/index.js';
/**
 * Get a single item from a collection using the appropriate service
 *
 * @param subscription Subscription object
 * @param accountability Accountability object
 * @param schema Schema object
 * @param event Event data
 * @returns the fetched item
 */
export async function getSinglePayload(subscription, accountability, schema, event) {
    const metaService = new MetaService({ schema, accountability });
    const query = subscription.query ?? {};
    const id = subscription.item;
    const result = {
        event: event?.action ?? 'init',
    };
    if (subscription.collection === 'directus_collections') {
        const service = new CollectionsService({ schema, accountability });
        result['data'] = await service.readOne(String(id));
    }
    else {
        const service = getService(subscription.collection, { schema, accountability });
        result['data'] = await service.readOne(id, query);
    }
    if ('meta' in query) {
        result['meta'] = await metaService.getMetaForQuery(subscription.collection, query);
    }
    return result;
}
/**
 * Get items from a collection using the appropriate service
 *
 * @param subscription Subscription object
 * @param accountability Accountability object
 * @param schema Schema object
 * @param event Event data
 * @returns the fetched items
 */
export async function getMultiPayload(subscription, accountability, schema, event) {
    const metaService = new MetaService({ schema, accountability });
    const result = {
        event: event?.action ?? 'init',
    };
    switch (subscription.collection) {
        case 'directus_collections':
            result['data'] = await getCollectionPayload(accountability, schema, event);
            break;
        case 'directus_fields':
            result['data'] = await getFieldsPayload(accountability, schema, event);
            break;
        case 'directus_relations':
            result['data'] = event?.payload;
            break;
        default:
            result['data'] = await getItemsPayload(subscription, accountability, schema, event);
            break;
    }
    const query = subscription.query ?? {};
    if ('meta' in query) {
        result['meta'] = await metaService.getMetaForQuery(subscription.collection, query);
    }
    return result;
}
/**
 * Get collection items
 *
 * @param accountability Accountability object
 * @param schema Schema object
 * @param event Event data
 * @returns the fetched collection data
 */
export async function getCollectionPayload(accountability, schema, event) {
    const service = new CollectionsService({ schema, accountability });
    if (!event?.action) {
        return await service.readByQuery();
    }
    else if (event.action === 'create') {
        return await service.readMany([String(event.key)]);
    }
    else if (event.action === 'delete') {
        return event.keys;
    }
    else {
        return await service.readMany(event.keys.map((key) => String(key)));
    }
}
/**
 * Get fields items
 *
 * @param accountability Accountability object
 * @param schema Schema object
 * @param event Event data
 * @returns the fetched field data
 */
export async function getFieldsPayload(accountability, schema, event) {
    const service = new FieldsService({ schema, accountability });
    if (!event?.action) {
        return await service.readAll();
    }
    else if (event.action === 'delete') {
        return event.keys;
    }
    else {
        return await service.readOne(event.payload?.['collection'], event.payload?.['field']);
    }
}
/**
 * Get items from a collection using the appropriate service
 *
 * @param subscription Subscription object
 * @param accountability Accountability object
 * @param schema Schema object
 * @param event Event data
 * @returns the fetched data
 */
export async function getItemsPayload(subscription, accountability, schema, event) {
    const query = subscription.query ?? {};
    const service = getService(subscription.collection, { schema, accountability });
    if (!event?.action) {
        return await service.readByQuery(query);
    }
    else if (event.action === 'create') {
        return await service.readMany([event.key], query);
    }
    else if (event.action === 'delete') {
        return event.keys;
    }
    else {
        return await service.readMany(event.keys, query);
    }
}
