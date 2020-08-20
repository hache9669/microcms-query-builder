import * as Comparator from "../src/Comparator";

describe("test Comparator module", () => {
    test("parse sign to string", () => {
        expect(Comparator.toString("=")).toEqual("equals");
        expect(Comparator.toString("<>")).toEqual("not_equals");
        expect(Comparator.toString("<")).toEqual("less_than");
        expect(Comparator.toString(">")).toEqual("greater_than");
    });

    test("parse upper case to lower case", () => {
        expect(Comparator.toString("BEGINS_WITH")).toEqual("begins_with");
        expect(Comparator.toString("CONTAINS")).toEqual("contains");
    });

    test("lower cases are changed nothing", () => {
        expect(Comparator.toString("exists")).toEqual("exists");
        expect(Comparator.toString("not_exists")).toEqual("not_exists");
    });
});
