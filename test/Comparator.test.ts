import * as Comparator from "../src/Comparator";

describe("test Comparator module", () => {
    test("parse sign to string", () => {
        expect(Comparator.toMicroCMSString("=")).toEqual("equals");
        expect(Comparator.toMicroCMSString("<>")).toEqual("not_equals");
        expect(Comparator.toMicroCMSString("<")).toEqual("less_than");
        expect(Comparator.toMicroCMSString(">")).toEqual("greater_than");
    });

    test("parse upper case to lower case", () => {
        expect(Comparator.toMicroCMSString("BEGINS_WITH")).toEqual("begins_with");
        expect(Comparator.toMicroCMSString("CONTAINS")).toEqual("contains");
    });

    test("lower cases are changed nothing", () => {
        expect(Comparator.toMicroCMSString("exists")).toEqual("exists");
        expect(Comparator.toMicroCMSString("not_exists")).toEqual("not_exists");
    });
});
