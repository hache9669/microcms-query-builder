import { Comparator } from "./IBuilder";

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

interface ISingleCondition<Schema, PropName extends keyof Schema> {
    field: PropName;
    comparator: Comparator;
    value: Schema[PropName]; // @TODO
}

export type ICondition<Schema> =
    | ISingleCondition<Schema, keyof Schema>
    | {
          left: ICondition<Schema>;
          right: ICondition<Schema>;
          operator: "AND" | "OR";
      };

interface SampleInterface {
    num: number;
    str: string;
    bol: boolean;
}

const condition: ICondition<SampleInterface> = {
    left: {
        field: "bol",
        comparator: "=",
        value: "hoge",
    },
    right: {
        left: {
            field: "bol",
            comparator: "=",
            value: 1, // @FIXME want to be shown as transpile error
        },
        right: {
            field: "num",
            comparator: "=",
            value: "fuga",
        },
        operator: "AND",
    },
    operator: "OR",
};
