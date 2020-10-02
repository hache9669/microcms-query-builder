import { Comparator } from "../Comparator";
import IMicroCMSQuery, { ICondition } from "./IMicroCMSQuery";

export default interface IFilterBuilder<Schema> {
    equals<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IFilterBuilder<Schema>;

    notEquals<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IFilterBuilder<Schema>;

    lessThan<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IFilterBuilder<Schema>;

    greaterThan<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IFilterBuilder<Schema>;

    contains<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IFilterBuilder<Schema>;

    exists(propName: keyof Schema): IFilterBuilder<Schema>;
    notExists(propName: keyof Schema): IFilterBuilder<Schema>;

    beginsWith<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IFilterBuilder<Schema>;

    where<PropName extends keyof Schema>(
        propName: PropName,
        comparator: Comparator,
        value: Schema[PropName]
    ): IFilterBuilder<Schema>;
    where(query: Query<Schema>): IFilterBuilder<Schema>;

    whereOr<PropName extends keyof Schema>(
        propName: PropName,
        comparator: Comparator,
        value: Schema[PropName]
    ): IFilterBuilder<Schema>;
    whereOr(query: Query<Schema>): IFilterBuilder<Schema>;

    toQuery(): IMicroCMSQuery<Schema>;

    readonly condition?: ICondition<Schema>;
}

export type Query<Schema> = (
    b: IFilterBuilder<Schema>
) => IFilterBuilder<Schema>;
