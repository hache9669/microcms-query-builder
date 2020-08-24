import * as qs from "query-string";

import IMicroCMSQuery, { ICondition } from "./types/IMicroCMSQuery";

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
            draftKey: this._draftKey,
            limit: this._limit,
            offset: this._offset,
            orders: undefined,
            q: this._q,
            fields: this._fields,
            ids: this._ids,
            filters: undefined,
            depth: this._depth,
        };
        return qs.stringify(queryObject);
    };
}
