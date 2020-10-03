import { MultiArgComparator, SingleArgComparator } from "../Comparator";

export type ISingleFilter<Schema, PropName extends keyof Schema> =
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

export interface ILayeredFilter<Schema> {
    type: "MULTI";
    left: IFilter<Schema>;
    right: IFilter<Schema>;
    operator: "and" | "or";
}

export type IFilter<Schema> =
    | ISingleFilter<Schema, keyof Schema>
    | ILayeredFilter<Schema>;

export const isFilter = <T>(arg: unknown): arg is IFilter<T> => {
    return (
        Object.prototype.hasOwnProperty.call(arg, "type") &&
        (isLayeredFilter(arg as IFilter<T>) ||
            isSingleFilter(arg as IFilter<T>))
    );
};

export const isLayeredFilter = <T>(
    arg: IFilter<T>
): arg is ILayeredFilter<T> => {
    return (
        arg.type === "MULTI" &&
        isFilter(arg.left) &&
        isFilter(arg.right) &&
        ["and", "or"].indexOf(arg.operator) !== -1
    );
};

export const isSingleFilter = <T, K extends keyof T>(
    arg: IFilter<T>
): arg is ISingleFilter<T, K> => {
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

// eslint-disable-next-line
const filter: IFilter<SampleInterface> = {
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
