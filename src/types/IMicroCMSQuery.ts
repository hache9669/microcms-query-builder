import { IFilter } from "./IFilter";
import IMicroCMSSearchable from "./IMicroCMSSearchable";

export interface IMicroCMSParam<Schema extends IMicroCMSSearchable> {
    draftKey?: string;
    limit?: number;
    offset?: number;
    orders?: Order<Schema>[];
    q?: string;
    fields?: Array<keyof Schema>;
    ids?: string[];
    filters?: IFilter<Schema>;
    depth?: 1 | 2 | 3;
}

export interface IMicroCMSParamToSend extends Stringfiable {
    draftKey?: string;
    limit?: number;
    offset?: number;
    orders?: string[];
    q?: string;
    fields?: string[];
    ids?: string[];
    filters?: string;
    depth?: 1 | 2 | 3;
}

interface Stringfiable {
    [p: string]: string | string[] | number | undefined;
}

export interface Order<Schema> {
    field: keyof Schema;
    sort: "asc" | "desc";
}

/**
 * microCMS list endpoint
 * GET /api/v1/{endpoint}?{query.toString()}
 */
type IMicroCMSQuery<Schema extends IMicroCMSSearchable> = {
    toParam: () => IMicroCMSParamToSend;
    toString: () => string;
} & IMicroCMSParam<Schema>;
export default IMicroCMSQuery;
