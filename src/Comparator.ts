export type Comparator = SingleArgComparator | MultiArgComparator;

export type SingleArgComparator =
    | "EXISTS"
    | "exists"
    | "NOT_EXISTS"
    | "not_exists";

export const isSingleArgComparator = (
    arg: unknown
): arg is SingleArgComparator =>
    typeof arg === "string" &&
    ["EXISTS", "exists", "NOT_EXISTS", "not_exists"].indexOf(arg) !== -1;

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

export const isMultiArgComparator = (arg: unknown): arg is MultiArgComparator =>
    typeof arg === "string" &&
    [
        "=",
        "EQUALS",
        "equals",
        "<>",
        "NOT_EQUALS",
        "not_equals",
        "<",
        "GREATER_THAN",
        "greater_than",
        ">",
        "LESS_THAN",
        "less_than",
        "CONTAINS",
        "contains",
        "BEGINS_WITH",
        "begins_with",
    ].indexOf(arg) !== -1;

const comparatorMap = new Map<Comparator, string>([
    ["=", "equals"],
    ["<>", "not_equals"],
    ["<", "less_than"],
    [">", "greater_than"],
]);

export const toMicroCMSString: (comparator: Comparator) => string = (
    comparator: Comparator
) => {
    return comparatorMap.get(comparator) || comparator.toLocaleLowerCase();
};
