import IMicroCMSQuery, { ICondition } from "./IMicroCMSQuery";
import IMicroCMSSearchable, {
    IMicroCMSPrimitiveLike,
} from "./IMicroCMSSearchable";

export default interface IFilterBuilder<Schema extends IMicroCMSSearchable> {
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

    toQuery(): IMicroCMSQuery<Schema>;

    readonly condition?: ICondition<Schema>;
}

export type Query<Schema extends IMicroCMSSearchable> = (
    b: IFilterBuilder<Schema>
) => IFilterBuilder<Schema>;

export type PrimitiveOnly<
    Schema extends IMicroCMSSearchable,
    PropName extends keyof Schema
> = Schema[PropName] extends IMicroCMSPrimitiveLike ? PropName : never;

export type PrimitiveOrObject<
    Schema extends IMicroCMSSearchable,
    PropName extends keyof Schema
> = Schema[PropName] extends IMicroCMSPrimitiveLike | IMicroCMSSearchable
    ? PropName
    : never;

export type PrimitiveOrArray<
    Schema extends IMicroCMSSearchable,
    PropName extends keyof Schema
> = Schema[PropName] extends IMicroCMSPrimitiveLike | Array<IMicroCMSSearchable>
    ? PropName
    : never;

export type StringKey<
    Schema extends IMicroCMSSearchable
> = keyof Schema extends string ? keyof Schema : never;
