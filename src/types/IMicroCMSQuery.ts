import { MultiArgComparator, SingleArgComparator } from "../Comparator";
import IMicroCMSSearchable from "./IMicroCMSSearchable";

/**
 * microCMS list endpoint
 * GET /api/v1/{endpoint}?{query.toString()}
 */
export default interface IMicroCMSQuery<Schema extends IMicroCMSSearchable> {
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

export type ISingleCondition<Schema, PropName extends keyof Schema> =
    | {
          type: "SINGLE";
          field: PropName;
          comparator: MultiArgComparator;
          value: Schema[PropName]; // @TODO
      }
    | {
          type: "SINGLE";
          field: PropName;
          comparator: SingleArgComparator;
          value?: undefined;
      };

export interface IMultipleCondition<Schema> {
    type: "MULTI";
    left: ICondition<Schema>;
    right: ICondition<Schema>;
    operator: "and" | "or";
}

export type ICondition<Schema> =
    | ISingleCondition<Schema, keyof Schema>
    | IMultipleCondition<Schema>;

export const isCondition = <T>(arg: any): arg is ICondition<T> => {
    return isMultipleCondition(arg) || isSingleCondition(arg);
};

export const isMultipleCondition = <T>(
    arg: any
): arg is IMultipleCondition<T> => {
    return (
        arg.type === "MULTI" &&
        isCondition(arg.left) &&
        isCondition(arg.right) &&
        ["and", "or"].indexOf(arg.operator) !== -1
    );
};

export const isSingleCondition = <T, K extends keyof T>(
    arg: any
): arg is ISingleCondition<T, K> => {
    return (
        arg.type === "SINGLE" &&
        typeof arg.field === "string" &&
        typeof arg.comparator === "string"
    );
};

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
