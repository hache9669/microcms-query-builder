import * as Comparator from "./Comparator";
import IBuilder, { Query } from "./types/IBuilder";
import IMicroCMSQuery, {
    ICondition,
    IMultipleCondition,
    isCondition,
    ISingleCondition,
    Order,
} from "./types/IMicroCMSQuery";

export default class Builder<Schema> implements IBuilder<Schema> {
    // #region Filter Methods
    public equals<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema> {
        this.addCondition(propName, Builder.Equal, value);
        return this;
    }
    public notEquals<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema> {
        this.addCondition(propName, Builder.NotEqual, value);
        return this;
    }
    public lessThan<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema> {
        this.addCondition(propName, Builder.LessThan, value);
        return this;
    }
    public greaterThan<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema> {
        this.addCondition(propName, Builder.GreaterThan, value);
        return this;
    }
    public contains<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema> {
        this.addCondition(propName, Builder.Contains, value);
        return this;
    }
    public exists<PropName extends keyof Schema>(
        propName: PropName
    ): IBuilder<Schema> {
        const newCondition: ISingleCondition<Schema, PropName> = {
            type: "SINGLE",
            field: propName,
            comparator: Builder.Exists,
        };
        this.addCondition(newCondition);
        return this;
    }
    public notExists<PropName extends keyof Schema>(
        propName: PropName
    ): IBuilder<Schema> {
        const newCondition: ISingleCondition<Schema, PropName> = {
            type: "SINGLE",
            field: propName,
            comparator: Builder.NotExists,
        };
        this.addCondition(newCondition);
        return this;
    }
    public beginsWith<PropName extends keyof Schema>(
        propName: PropName,
        value: Schema[PropName]
    ): IBuilder<Schema> {
        this.addCondition(propName, Builder.Equal, value);
        return this;
    }

    public where<PropName extends keyof Schema>(
        first: PropName | Query<Schema>,
        second?: Comparator.Comparator,
        third?: Schema[PropName]
    ): IBuilder<Schema> {
        throw new Error("Method not implemented.");
    }

    public whereOr<PropName extends keyof Schema>(
        first: PropName | Query<Schema>,
        second?: Comparator.Comparator,
        third?: Schema[PropName]
    ): IBuilder<Schema> {
        throw new Error("Method not implemented.");
    }
    //#endregion Filter Methods

    //#region Other Queries
    // @TODO rename functions
    public draftKey(value?: string) {
        this._query.draftKey = value;
    }
    public limit(value?: number) {
        this._query.limit = value;
    }
    public offset(value?: number) {
        this._query.offset = value;
    }
    public orders(value?: Order<Schema>[]) {
        this._query.orders = value;
    }
    public q(value?: string) {
        this._query.q = value;
    }
    public fields(value?: Array<keyof Schema>) {
        this._query.fields = value;
    }
    public ids(value?: string[]) {
        this._query.ids = value;
    }
    public filters(value?: ICondition<Schema>) {
        if (value) {
            this.addCondition(value);
        } else {
            this._query.filters = value;
        }
    }
    public depth(value?: 1 | 2 | 3) {
        this._query.depth = value;
    }
    //#endregion Other Queries

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

        const oldCondition = this._query.filters;
        if (!oldCondition) {
            this._query.filters = newCondition;
        } else {
            this._query.filters = this.mergeConditions(
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

    public toQuery(): IMicroCMSQuery<Schema> {
        return this._query;
    }

    private _query: IMicroCMSQuery<Schema> = {};
    public static Equal: Comparator.MultiArgComparator = "equals";
    public static NotEqual: Comparator.MultiArgComparator = "not_equals";
    public static GreaterThan: Comparator.MultiArgComparator = "greater_than";
    public static LessThan: Comparator.MultiArgComparator = "less_than";
    public static Contains: Comparator.MultiArgComparator = "contains";
    public static Exists: Comparator.SingleArgComparator = "exists";
    public static NotExists: Comparator.SingleArgComparator = "not_exists";
    public static BeginsWith: Comparator.MultiArgComparator = "begins_with";
}
