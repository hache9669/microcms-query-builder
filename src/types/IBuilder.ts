import IMicroCMSQuery from "./IMicroCMSQuery";

export type Comparator = "=" | "<" | ">"; // and more

export default interface IBuilder<Schema> {
    equals<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema>;

    notEquals<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema>;

    lessThan<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema>;

    greaterThan<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema>;

    contains<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema>;

    exists(propName: keyof Schema): IBuilder<Schema>;

    beginsWith<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema>;

    where<PropName extends keyof Schema>(
        propName: PropName,
        comparator: Comparator,
        value: Schema[PropName]
    ): IBuilder<Schema>;
    where(query: Query<Schema>): IBuilder<Schema>;

    whereOr<PropName extends keyof Schema>(
        propName: PropName,
        comparator: Comparator,
        value: Schema[PropName]
    ): IBuilder<Schema>;
    whereOr(query: Query<Schema>): IBuilder<Schema>;

    toQuery(): IMicroCMSQuery<Schema>;
}

export type Query<Schema> = (b: IBuilder<Schema>) => IBuilder<Schema>;
