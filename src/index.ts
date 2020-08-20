import IBuilder, { Comparator, Query } from "./types/IBuilder";
import IMicroCMSQuery from "./types/IMicroCMSQuery";

export default class Builder<T> implements IBuilder<T> {
    public equals<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public notEquals<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public lessThan<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public greaterThan<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public contains<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public exists<K extends keyof T = keyof T>(propName: keyof T): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public beginsWith<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public where<K extends keyof T = keyof T>(
        first: keyof T | Query<T>,
        second?: Comparator,
        third?: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public whereOr<K extends keyof T = keyof T>(
        first: keyof T | Query<T>,
        second?: Comparator,
        third?: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public start(): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public toQuery(): string {
        throw new Error("Method not implemented.");
    }
    public toFilter(): { filter: string } {
        throw new Error("Method not implemented.");
    }

    private _query: IMicroCMSQuery<T> = {};
    public static Equal: Comparator = "=";
    public static LessThan: Comparator = "<";
    public static GreaterThan: Comparator = ">";
}
