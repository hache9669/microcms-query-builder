import IBuilder, { Comparator } from "./types/IBuilder";
import IQuery from "./types/IQuery";

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
        propName: keyof T,
        comparator: Comparator,
        value: T[K]
    ): IBuilder<T>;
    public where<K extends keyof T = keyof T>(
        query: (b: IBuilder<T>) => IBuilder<T>
    ): IBuilder<T>;
    public where<K extends keyof T = keyof T>(
        first: any,
        second?: Comparator,
        value?: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public whereOr<K extends keyof T = keyof T>(
        propName: keyof T,
        comparator: Comparator,
        value: T[K]
    ): IBuilder<T>;
    public whereOr<K extends keyof T = keyof T>(
        query: (b: IBuilder<T>) => IBuilder<T>
    ): IBuilder<T>;
    public whereOr<K extends keyof T = keyof T>(
        first: any,
        second?: Comparator,
        value?: T[K]
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

    private _query: IQuery<T> = {};
    public static Equal: Comparator = "=";
    public static LessThan: Comparator = "<";
    public static GreaterThan: Comparator = ">";
}
