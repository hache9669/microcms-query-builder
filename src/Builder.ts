import { Comparator } from "./Comparator";
import IBuilder, { Query } from "./types/IBuilder";
import IMicroCMSQuery from "./types/IMicroCMSQuery";

export default class Builder<T> implements IBuilder<T> {
    public equals<K extends keyof T>(propName: K, value: T[K]): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public notEquals<K extends keyof T>(propName: K, value: T[K]): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public lessThan<K extends keyof T>(propName: K, value: T[K]): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public greaterThan<K extends keyof T>(
        propName: K,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public contains<K extends keyof T>(propName: K, value: T[K]): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public exists<K extends keyof T>(propName: K): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public beginsWith<K extends keyof T>(
        propName: K,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public where<K extends keyof T>(
        first: K | Query<T>,
        second?: Comparator,
        third?: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public whereOr<K extends keyof T>(
        first: K | Query<T>,
        second?: Comparator,
        third?: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public toQuery(): IMicroCMSQuery<T> {
        throw new Error("Method not implemented.");
    }

    private _query: IMicroCMSQuery<T> = {};
    public static Equal: Comparator = "=";
    public static LessThan: Comparator = "<";
    public static GreaterThan: Comparator = ">";
}
