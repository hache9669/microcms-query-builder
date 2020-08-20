import IQuery from "./IQuery";

export type Comparator = "=" | "<" | ">"; // and more

export default interface IBuilder<T> {
    equals<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T>;

    notEquals<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T>;

    lessThan<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T>;

    greaterThan<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T>;

    contains<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T>;

    exists<K extends keyof T = keyof T>(propName: keyof T): IBuilder<T>;

    beginsWith<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T>;

    // 初期化？インスタンス作成？ いずれにせよ、都度newしたくはないような…
    start(): IBuilder<T>;
    toQuery(): string;
    toFilter(): { filter: string };
}
