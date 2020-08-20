import Builder from "../src";
import SampleInterface from "./interface";

describe("complex query", (): void => {
    let builder: Builder<SampleInterface>;

    beforeEach(() => {
        builder = new Builder<SampleInterface>();
    });

    test("chained query", () => {
        builder.equals("num", 1).notEquals("str", "hoge");
        const expectQuery = "num[equal]1,str[notEqual]hoge";

        expect(builder.toQuery()).toEqual(
            expect.objectContaining({ filters: expectQuery })
        );
        expect(builder.toQuery().toString()).toEqual(
            expect.objectContaining(`filters=${expectQuery}`)
        );
    });

    test("nested query", () => {
        builder
            .where((b: Builder<SampleInterface>) => {
                return b
                    .where("num", Builder.Equal, 1)
                    .whereOr("str", Builder.Equal, "hoge");
            })
            .where((b) => {
                return b.where("num", "=", 3).whereOr("str", "=", "fuga");
            });
        const expectQuery =
            "(num[equal]1[or]str[equal]hoge)[and](num[equal]3[or]str[equal]fuga)";

        expect(builder.toQuery()).toEqual(
            expect.objectContaining({ filter: expectQuery })
        );
        expect(builder.toQuery().toString()).toEqual(`filter=${expectQuery}`);
    });
});
