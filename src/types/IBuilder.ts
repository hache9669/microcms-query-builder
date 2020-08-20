import IMicroCMSQuery from "./IMicroCMSQuery";

export type Comparator = "=" | "<" | ">"; // and more

export default interface IBuilder<T> {
    equals<K extends keyof T>(propName: K, value: T[K]): IBuilder<T>;

    notEquals<K extends keyof T>(propName: K, value: T[K]): IBuilder<T>;

    lessThan<K extends keyof T>(propName: K, value: T[K]): IBuilder<T>;

    greaterThan<K extends keyof T>(propName: K, value: T[K]): IBuilder<T>;

    contains<K extends keyof T>(propName: K, value: T[K]): IBuilder<T>;

    exists<K extends keyof T>(propName: keyof T): IBuilder<T>;

    beginsWith<K extends keyof T>(propName: K, value: T[K]): IBuilder<T>;

    where<K extends keyof T>(
        propName: K,
        comparator: Comparator,
        value: T[K]
    ): IBuilder<T>;
    where<K extends keyof T>(query: Query<T>): IBuilder<T>;

    whereOr<K extends keyof T>(
        propName: K,
        comparator: Comparator,
        value: T[K]
    ): IBuilder<T>;
    whereOr<K extends keyof T>(query: Query<T>): IBuilder<T>;

    toQuery(): IMicroCMSQuery<T>;
}

export type Query<T> = (b: IBuilder<T>) => IBuilder<T>;
