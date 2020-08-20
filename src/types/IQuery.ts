import { Comparator } from "./IBuilder";

/**
 * microCMS list endpoint
 * GET /api/v1/{endpoint}?{query.toString()}
 */
export default interface IQuery<T> {
    draftKey?: string;
    limit?: number;
    offset?: number;
    orders?: {
        field: Field<T>;
        sort: "asc" | "desc";
    }[];
    q?: string;
    fields?: Field<T>[];
    ids?: string[];
    filters?: ICondition<T>;
    depth?: 1 | 2 | 3;
}

export interface ISingleCondition<T, K extends keyof T = keyof T> {
    field: Field<T>;
    comparator: Comparator;
    value: T[K];
}

export type ICondition<T> =
    | ISingleCondition<T>
    | {
          left: ICondition<T>;
          right: ICondition<T>;
          operator: "AND" | "OR";
      };

export type Field<T> = keyof T;

interface SampleInterface {
    num: number;
    str: string;
    bol: boolean;
    obj: { prop: any };
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
            value: false,
        },
        right: {
            field: "num",
            comparator: "=",
            value: "fuga",
        },
    },
};
