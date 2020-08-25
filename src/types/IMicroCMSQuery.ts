import { Comparator } from "../Comparator";

/**
 * microCMS list endpoint
 * GET /api/v1/{endpoint}?{query.toString()}
 */
export default interface IMicroCMSQuery<Schema> {
    draftKey?: string;
    limit?: number;
    offset?: number;
    orders?: Order<Schema>[];
    q?: string;
    fields?: Array<keyof Schema>;
    ids?: string[];
    filters?: ICondition<Schema>;
    depth?: 1 | 2 | 3;

    toString: () => string;
}

export interface Order<Schema> {
    field: keyof Schema;
    sort: "asc" | "desc";
}

export interface ISingleCondition<Schema, PropName extends keyof Schema> {
    type: "SINGLE";
    field: PropName;
    comparator: Comparator;
    value: Schema[PropName]; // @TODO
}

export interface IMultipleCondition<Schema> {
    type: "MULTI";
    left: ICondition<Schema>;
    right: ICondition<Schema>;
    operator: "and" | "or";
}

export type ICondition<Schema> =
    | ISingleCondition<Schema, keyof Schema>
    | IMultipleCondition<Schema>;

interface SampleInterface {
    num: number;
    str: string;
    bol: boolean;
}

const condition: ICondition<SampleInterface> = {
    type: "MULTI",
    left: {
        type: "SINGLE",
        field: "bol",
        comparator: "=",
        value: "hoge",
    },
    right: {
        type: "MULTI",
        left: {
            type: "SINGLE",
            field: "bol",
            comparator: "=",
            value: 1, // @FIXME want to be shown as transpile error
        },
        right: {
            type: "SINGLE",
            field: "num",
            comparator: "=",
            value: "fuga",
        },
        operator: "and",
    },
    operator: "or",
};
