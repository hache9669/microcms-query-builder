export type Comparator = "=" | "<" | ">"; // and more

export default interface IBuilder<T> {
    // LINQ風(OR条件が厳しい)
    isEqualTo<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T>;

    isNotEqualTo<K extends keyof T = keyof T>(
        propName: keyof T,
        value: T[K]
    ): IBuilder<T>;

    // Eloquent風
    where<K extends keyof T = keyof T>(
        propName: keyof T,
        comparator: Comparator,
        value: T[K]
    ): IBuilder<T>;
    where<K extends keyof T = keyof T>(
        query: (b: IBuilder<T>) => IBuilder<T>
    ): IBuilder<T>;

    whereOr<K extends keyof T = keyof T>(
        propName: keyof T,
        comparator: Comparator,
        value: T[K]
    ): IBuilder<T>;
    whereOr<K extends keyof T = keyof T>(
        query: (b: IBuilder<T>) => IBuilder<T>
    ): IBuilder<T>;

    // 初期化？インスタンス作成？ いずれにせよ、都度newしたくはないような…
    start(): IBuilder<T>;
    toQuery(): string;
    toFilter(): { filter: string };
}
