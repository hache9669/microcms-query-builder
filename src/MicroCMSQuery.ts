import * as qs from "query-string";

import * as Comparator from "./Comparator";
import IMicroCMSQuery, {
    ICondition,
    IMultipleCondition,
    ISingleCondition,
    Order,
} from "./types/IMicroCMSQuery";

export default class MicroCMSQuery<T> implements IMicroCMSQuery<T> {
    private _draftKey?: string;
    private _limit?: number;
    private _offset?: number;
    private _orders?: { field: keyof T; sort: "asc" | "desc" }[];
    private _q?: string;
    private _fields?: (keyof T)[];
    private _ids?: string[];
    private _filters?: ICondition<T>;
    private _depth?: 1 | 2 | 3;

    public get draftKey(): string | undefined {
        return this._draftKey;
    }
    public set draftKey(arg: string | undefined) {
        this._draftKey = arg;
    }

    public get limit(): number | undefined {
        return this._limit;
    }
    public set limit(arg: number | undefined) {
        this._limit = arg;
    }

    public get offset(): number | undefined {
        return this._offset;
    }
    public set offset(arg: number | undefined) {
        this._offset = arg;
    }

    public get orders():
        | { field: keyof T; sort: "asc" | "desc" }[]
        | undefined {
        return this._orders;
    }
    public set orders(
        arg: { field: keyof T; sort: "asc" | "desc" }[] | undefined
    ) {
        this._orders = arg;
    }

    public get q(): string | undefined {
        return this._q;
    }
    public set q(arg: string | undefined) {
        this._q = arg;
    }

    public get fields(): (keyof T)[] | undefined {
        return this._fields;
    }
    public set fields(arg: (keyof T)[] | undefined) {
        this._fields = arg;
    }

    public get ids(): string[] | undefined {
        return this._ids;
    }
    public set ids(arg: string[] | undefined) {
        this._ids = arg;
    }

    public get filters(): ICondition<T> | undefined {
        return this._filters;
    }
    public set filters(arg: ICondition<T> | undefined) {
        this._filters = arg;
    }

    public get depth(): 1 | 2 | 3 | undefined {
        return this._depth;
    }
    public set depth(arg: 1 | 2 | 3 | undefined) {
        this._depth = arg;
    }

    public toString: () => string = () => {
        const queryObject = {
            draftKey: this._draftKey?.length ? this._draftKey : undefined,
            limit:
                undefined !== this._limit && this._limit >= 0
                    ? this._limit
                    : undefined,
            offset:
                undefined !== this._offset && this._offset >= 0
                    ? this._offset
                    : undefined,
            orders: this._orders
                ?.filter(
                    (order, index, self) =>
                        self.findIndex((o) => o.field === order.field) === index
                )
                .map(
                    (order: Order<T>) =>
                        `${order.sort === "desc" ? "-" : ""}${order.field}`
                ),
            q: this._q?.length ? this._q : undefined,
            fields: this._fields?.filter(
                (field, index, self) => self.indexOf(field) === index
            ),
            ids: this._ids?.filter(
                (id, index, self) => self.indexOf(id) === index
            ),
            filters: this.filtersToString(this._filters),
            depth: this._depth,
        };
        return qs.stringify(queryObject, {
            arrayFormat: "comma",
            encode: false,
        });
    };

    private filtersToString: (
        condition?: ICondition<T>
    ) => string | undefined = (condition?: ICondition<T>) => {
        if (!condition) {
            // filter is empty
            return undefined;
        }

        if (this.isMultipleCondition(condition)) {
            // filter is ICondition
            const left = this.filtersToString(condition.left);
            const right = this.filtersToString(condition.right);
            return `(${left})[${condition.operator}](${right})`;
        }

        if (this.isSingleCondition(condition)) {
            // filter is ISingleCondition
            return `${condition.field}[${Comparator.toString(
                condition.comparator
            )}]${condition.value}`;
        }
    };

    private isMultipleCondition = (
        arg: ICondition<T>
    ): arg is IMultipleCondition<T> => arg.type === "MULTI";
    private isSingleCondition = <U extends keyof T>(
        arg: ICondition<T>
    ): arg is ISingleCondition<T, U> => arg.type === "SINGLE";
}
