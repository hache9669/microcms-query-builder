export type Comparator = SingleArgComparator | MultiArgComparator;

export type SingleArgComparator =
    | "EXISTS"
    | "exists"
    | "NOT_EXISTS"
    | "not_exists";

export type MultiArgComparator =
    | "="
    | "EQUALS"
    | "equals"
    | "<>"
    | "NOT_EQUALS"
    | "not_equals"
    | "<"
    | "GREATER_THAN"
    | "greater_than"
    | ">"
    | "LESS_THAN"
    | "less_than"
    | "CONTAINS"
    | "contains"
    | "BEGINS_WITH"
    | "begins_with";

const comparatorMap = new Map<Comparator, string>([
    ["=", "equals"],
    ["<>", "not_equals"],
    ["<", "less_than"],
    [">", "greater_than"],
]);

export const toString: (comparator: Comparator) => string = (
    comparator: Comparator
) => {
    return comparatorMap.get(comparator) || comparator.toLocaleLowerCase();
};
