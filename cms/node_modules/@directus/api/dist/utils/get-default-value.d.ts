import type { SchemaOverview } from '@directus/schema/types/overview';
import type { Column } from '@directus/schema';
import type { FieldMeta } from '@directus/types';
export default function getDefaultValue(column: SchemaOverview[string]['columns'][string] | Column, field?: {
    special?: FieldMeta['special'];
}): string | boolean | number | Record<string, any> | any[] | null;
