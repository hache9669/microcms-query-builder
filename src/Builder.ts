import * as Comparator from "./Comparator";
import IBuilder, { Query } from "./types/IBuilder";
import IMicroCMSQuery, {
    ISingleCondition,
    isSingleCondition,
} from "./types/IMicroCMSQuery";

export default class Builder<T> implements IBuilder<T> {
    // #region Filter Methods
    public equals<K extends keyof T>(propName: K, value: T[K]): IBuilder<T> {
        this.addCondition(propName, Builder.Equal, value);
        return this;
    }
    public notEquals<K extends keyof T>(propName: K, value: T[K]): IBuilder<T> {
        this.addCondition(propName, Builder.NotEqual, value);
        return this;
    }
    public lessThan<K extends keyof T>(propName: K, value: T[K]): IBuilder<T> {
        this.addCondition(propName, Builder.LessThan, value);
        return this;
    }
    public greaterThan<K extends keyof T>(
        propName: K,
        value: T[K]
    ): IBuilder<T> {
        this.addCondition(propName, Builder.GreaterThan, value);
        return this;
    }
    public contains<K extends keyof T>(propName: K, value: T[K]): IBuilder<T> {
        this.addCondition(propName, Builder.Contains, value);
        return this;
    }
    public exists<K extends keyof T>(propName: K): IBuilder<T> {
        const newCondition: ISingleCondition<T, K> = {
            type: "SINGLE",
            field: propName,
            comparator: Builder.Exists,
        };
        this.addCondition(newCondition);
        return this;
    }
    public notExists<K extends keyof T>(propName: K): IBuilder<T> {
        const newCondition: ISingleCondition<T, K> = {
            type: "SINGLE",
            field: propName,
            comparator: Builder.NotExists,
        };
        this.addCondition(newCondition);
        return this;
    }
    public beginsWith<K extends keyof T>(
        propName: K,
        value: T[K]
    ): IBuilder<T> {
        this.addCondition(propName, Builder.Equal, value);
        return this;
    }

    public where<K extends keyof T>(
        first: K | Query<T>,
        second?: Comparator.Comparator,
        third?: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }

    public whereOr<K extends keyof T>(
        first: K | Query<T>,
        second?: Comparator.Comparator,
        third?: T[K]
    ): IBuilder<T> {
        throw new Error("Method not implemented.");
    }
    //#endregion Filter Methods

    //#region Other Queries
    //#endregion Other Queries

    private addCondition<K extends keyof T>(
        field: K,
        comparator: Comparator.MultiArgComparator,
        value: T[K]
    ): void;
    private addCondition<K extends keyof T>(
        condition: ISingleCondition<T, K>
    ): void;
    private addCondition<K extends keyof T>(
        first: K | ISingleCondition<T, K>,
        second?: Comparator.MultiArgComparator,
        third?: T[K]
    ): void {
        let newCondition: ISingleCondition<T, K>;
        if (typeof first === "string" && second && third) {
            newCondition = {
                type: "SINGLE",
                field: first,
                comparator: second,
                value: third,
            };
        } else if (isSingleCondition(first)) {
            newCondition = first;
        }

        // @TODO newCondition + alreadyHavingConditions
    }

    public toQuery(): IMicroCMSQuery<T> {
        throw new Error("Method not implemented.");
    }

    private _query: IMicroCMSQuery<T> = {};
    public static Equal: Comparator.MultiArgComparator = "equals";
    public static NotEqual: Comparator.MultiArgComparator = "not_equals";
    public static GreaterThan: Comparator.MultiArgComparator = "greater_than";
    public static LessThan: Comparator.MultiArgComparator = "less_than";
    public static Contains: Comparator.MultiArgComparator = "contains";
    public static Exists: Comparator.SingleArgComparator = "exists";
    public static NotExists: Comparator.SingleArgComparator = "not_exists";
    public static BeginsWith: Comparator.MultiArgComparator = "begins_with";
}
