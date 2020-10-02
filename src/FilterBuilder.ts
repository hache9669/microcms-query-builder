import * as moment from "moment";

import * as Comparator from "./Comparator";
import MicroCMSQuery from "./MicroCMSQuery";
import IFilterBuilder, {
    PrimitiveOnly,
    PrimitiveOrArray,
    PrimitiveOrObject,
} from "./types/IFilterBuilder";
import IMicroCMSQuery, {
    ICondition,
    IMultipleCondition,
    isCondition,
    ISingleCondition,
} from "./types/IMicroCMSQuery";
import IMicroCMSSearchable from "./types/IMicroCMSSearchable";

export default class FilterBuilder<Schema extends IMicroCMSSearchable>
    implements IFilterBuilder<Schema> {
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
    /**
     * @TODO プロパティの型が取得できないため、「コンテンツ参照では利用できない」が表現できない
     * mapped typeを用いてビルダーを定義し直す？←メソッドチェインができない…
     * builder.model.arr.exists() // type error
     * @param propName
     */
    public exists<PropName extends keyof Schema>(
        propName: PrimitiveOnly<Schema, PropName>
    ): IFilterBuilder<Schema> {
        const newCondition: ISingleCondition<Schema, PropName> = {
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
        const newCondition: ISingleCondition<Schema, PropName> = {
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
    private addCondition<PropName extends keyof Schema>(
        condition: ICondition<Schema>
    ): void;
    /**
     * add condition simply and combine with "and" operator
     * @param first
     * @param second
     * @param third
     */
    private addCondition<PropName extends keyof Schema>(
        first: PropName | ICondition<Schema>,
        second?: Comparator.MultiArgComparator,
        third?: Schema[PropName]
    ): void {
        let newCondition: ICondition<Schema>;
        if (typeof first === "string" && second && third) {
            newCondition = {
                type: "SINGLE",
                field: first,
                comparator: second,
                value: third,
            };
        } else if (isCondition(first)) {
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
        left: ICondition<Schema>,
        right: ICondition<Schema>,
        operator: "and" | "or"
    ): IMultipleCondition<Schema> => {
        return {
            type: "MULTI",
            left,
            right,
            operator,
        };
    };
    //#endregion Filter Utils

    private _condition?: ICondition<Schema>;
    get condition(): ICondition<Schema> | undefined {
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
