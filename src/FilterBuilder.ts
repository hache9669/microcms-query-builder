import * as Comparator from "./Comparator";
import MicroCMSQuery from "./MicroCMSQuery";
import {
    IFilter,
    ILayeredFilter,
    isFilter,
    ISingleFilter,
} from "./types/IFilter";
import IFilterBuilder, {
    PrimitiveOnly,
    PrimitiveOrArray,
    PrimitiveOrObject,
} from "./types/IFilterBuilder";
import IMicroCMSQuery from "./types/IMicroCMSQuery";
import IMicroCMSSearchable from "./types/IMicroCMSSearchable";

export default class FilterBuilder<Schema extends IMicroCMSSearchable>
    implements IFilterBuilder<Schema>
{
    // #region Filter Methods
    public equals<PropName extends keyof Schema>(
        propName: PrimitiveOrObject<Schema, PropName>,
        value: Schema[PropName]
    ): IFilterBuilder<Schema> {
        this.addCondition(propName, FilterBuilder.Equal, value);
        return this;
    }
    public notEquals<PropName extends keyof Schema>(
        propName: PrimitiveOnly<Schema, PropName>,
        value: Schema[PropName]
    ): IFilterBuilder<Schema> {
        this.addCondition(propName, FilterBuilder.NotEqual, value);
        return this;
    }
    public lessThan<PropName extends keyof Schema>(
        propName: PrimitiveOnly<Schema, PropName>,
        value: Schema[PropName]
    ): IFilterBuilder<Schema> {
        this.addCondition(propName, FilterBuilder.LessThan, value);
        return this;
    }
    public greaterThan<PropName extends keyof Schema>(
        propName: PrimitiveOnly<Schema, PropName>,
        value: Schema[PropName]
    ): IFilterBuilder<Schema> {
        this.addCondition(propName, FilterBuilder.GreaterThan, value);
        return this;
    }
    public contains<PropName extends keyof Schema>(
        propName: PrimitiveOrArray<Schema, PropName>,
        value: Schema[PropName]
    ): IFilterBuilder<Schema> {
        this.addCondition(propName, FilterBuilder.Contains, value);
        return this;
    }
    public exists<PropName extends keyof Schema>(
        propName: PrimitiveOnly<Schema, PropName>
    ): IFilterBuilder<Schema> {
        const newCondition: ISingleFilter<Schema, PropName> = {
            type: "SINGLE",
            field: propName,
            comparator: FilterBuilder.Exists,
        };
        this.addCondition(newCondition);
        return this;
    }
    public notExists<PropName extends keyof Schema>(
        propName: PrimitiveOnly<Schema, PropName>
    ): IFilterBuilder<Schema> {
        const newCondition: ISingleFilter<Schema, PropName> = {
            type: "SINGLE",
            field: propName,
            comparator: FilterBuilder.NotExists,
        };
        this.addCondition(newCondition);
        return this;
    }
    public beginsWith<PropName extends keyof Schema>(
        propName: PrimitiveOnly<Schema, PropName>,
        value: Schema[PropName]
    ): IFilterBuilder<Schema> {
        this.addCondition(propName, FilterBuilder.BeginsWith, value);
        return this;
    }
    //#endregion Filter Methods

    //#region Filter Utils

    /**
     * add condition simply and combine with "and" operator
     * @param field
     * @param comparator
     * @param value
     */
    private addCondition<PropName extends keyof Schema>(
        field: PropName,
        comparator: Comparator.MultiArgComparator,
        value: Schema[PropName]
    ): void;
    /**
     * add condition simply and combine with "and" operator
     * @param condition
     */
    private addCondition(condition: IFilter<Schema>): void;
    /**
     * add condition simply and combine with "and" operator
     * @param first
     * @param second
     * @param third
     */
    private addCondition<PropName extends keyof Schema>(
        first: PropName | IFilter<Schema>,
        second?: Comparator.MultiArgComparator,
        third?: Schema[PropName]
    ): void {
        let newCondition: IFilter<Schema>;
        if (typeof first === "string" && second && third) {
            newCondition = {
                type: "SINGLE",
                field: first,
                comparator: second,
                value: third,
            };
        } else if (isFilter(first)) {
            newCondition = first;
        } else {
            return;
        }

        const oldCondition = this._condition;
        if (!oldCondition) {
            this._condition = newCondition;
        } else {
            this._condition = this.mergeConditions(
                oldCondition,
                newCondition,
                "and"
            );
        }
    }

    /**
     * merge two conditions with operator
     * (a, b, "and") => (a)and(b)
     *
     * @param left
     * @param right
     * @param operator
     */
    private mergeConditions = (
        left: IFilter<Schema>,
        right: IFilter<Schema>,
        operator: "and" | "or"
    ): ILayeredFilter<Schema> => {
        return {
            type: "MULTI",
            left,
            right,
            operator,
        };
    };
    //#endregion Filter Utils

    private _condition?: IFilter<Schema>;

    public toFilter(): IFilter<Schema> | undefined {
        return this._condition;
    }

    public toQuery(): IMicroCMSQuery<Schema> {
        const query = new MicroCMSQuery<Schema>();
        query.filters = this._condition;
        return query;
    }

    public static Equal: Comparator.MultiArgComparator = "equals";
    public static NotEqual: Comparator.MultiArgComparator = "not_equals";
    public static GreaterThan: Comparator.MultiArgComparator = "greater_than";
    public static LessThan: Comparator.MultiArgComparator = "less_than";
    public static Contains: Comparator.MultiArgComparator = "contains";
    public static Exists: Comparator.SingleArgComparator = "exists";
    public static NotExists: Comparator.SingleArgComparator = "not_exists";
    public static BeginsWith: Comparator.MultiArgComparator = "begins_with";
}
