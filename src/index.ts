import IBuilder, { Comparator } from "./types/IBuilder";
import IQuery from "./types/IQuery";
export default class Builder<T> implements IBuilder<T> {
    private _query: IQuery<T> = {};

    public isEqualTo<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public isNotEqualTo<K extends keyof T = keyof T>(
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

    public toQuery(): string {
        throw new Error("Method not implemented.");
    }
    public toFilter(): { filter: string } {
        throw new Error("Method not implemented.");
    }

    public start(): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    public static Equal: Comparator = "=";
    public static LessThan: Comparator = "<";
    public static GreaterThan: Comparator = ">";
}
