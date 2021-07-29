import FilterBuilder from "../dist/FilterBuilder";
import SampleInterface from "./interface";

describe("module test", (): void => {
    let builder: FilterBuilder<SampleInterface>;

    beforeEach(() => {
        builder = new FilterBuilder<SampleInterface>();
    });

    describe("chained query", () => {
        beforeEach(() => {
            builder.equals("num", 1).notEquals("str", "hoge").exists("obj");
        });
        const expectedString =
            "((num[equals]1[and]str[not_equals]hoge)[and]obj[exists])";
        test("toString", () => {
            expect(builder.toQuery().toString()).toEqual(
                `filters=${expectedString}`
            );
        });
    });
});
