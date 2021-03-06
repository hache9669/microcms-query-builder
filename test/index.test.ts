import FilterBuilder from "../src/FilterBuilder";
import { IFilter } from "../src/types/IFilter";
import SampleInterface from "./interface";

describe("complex query", (): void => {
    let builder: FilterBuilder<SampleInterface>;

    beforeEach(() => {
        builder = new FilterBuilder<SampleInterface>();
    });

    describe("chained query", () => {
        beforeEach(() => {
            builder.equals("num", 1).notEquals("str", "hoge").exists("obj");
        });
        const expectedFilter: IFilter<SampleInterface> = {
            type: "MULTI",
            left: {
                type: "MULTI",
                left: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.Equal,
                    value: 1,
                },
                right: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.NotEqual,
                    value: "hoge",
                },
                operator: "and",
            },
            right: {
                type: "SINGLE",
                field: "obj",
                comparator: FilterBuilder.Exists,
            },
            operator: "and",
        };
        const expectedString =
            "((num[equals]1[and]str[not_equals]hoge)[and]obj[exists])";

        test("toQuery", () => {
            expect(builder.toQuery().filters).toMatchObject(expectedFilter);
        });

        test("toString", () => {
            expect(builder.toQuery().toString()).toEqual(
                `filters=${expectedString}`
            );
        });
    });

    // test("nested query", () => {
    //     builder
    //         .where((b: FilterBuilder<SampleInterface>) => {
    //             return b
    //                 .where("num", FilterBuilder.Equal, 1)
    //                 .whereOr("str", FilterBuilder.Equal, "hoge");
    //         })
    //         .where((b) => {
    //             return b.where("num", "=", 3).whereOr("str", "=", "fuga");
    //         });
    //     const expectQuery =
    //         "(num[equal]1[or]str[equal]hoge)[and](num[equal]3[or]str[equal]fuga)";

    //     expect(builder.toQuery()).toEqual(
    //         expect.objectContaining({ filter: expectQuery })
    //     );
    //     expect(builder.toQuery().toString()).toEqual(`filter=${expectQuery}`);
    // });
});
