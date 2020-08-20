import Builder from "../src";
import IBuilder from "../src/types/IBuilder";

interface SampleInterface {
    num: number;
    str: string;
    bol: boolean;
    obj: { prop: any };
}

const builder: IBuilder<SampleInterface> = new Builder<SampleInterface>();

/**
 * シンプルなクエリ(LINQ風)のテスト
 */
describe("query like LINQ", (): void => {
    const b = builder.start().equals("num", 1).notEquals("str", "hoge");
    const expectCriteria = "num[equal]1,str[notEqual]hoge";

    test("toFilter", () => {
        expect(b.toQuery()).toEqual({ filter: expectCriteria });
    });
    test("toQuery", () => {
        expect(b.toQuery().toString()).toEqual("filter=" + expectCriteria);
    });
});

/**
 * シンプルなクエリ(Laravel風)
 */
describe("query like LINQ", (): void => {
    const b = builder.start().where("num", Builder.Equal, 1);
    const expectCriteria = "num[equal]1";

    test("toFilter", () => {
        expect(b.toQuery()).toEqual({ filter: expectCriteria });
    });
    test("toQuery", () => {
        expect(b.toQuery().toString()).toEqual("filter=" + expectCriteria);
    });
});

/**
 * 複雑なクエリ(Laravel風)
 */
describe("query like LINQ", (): void => {
    const b = builder
        .start()
        .where((b: Builder<SampleInterface>) => {
            return b
                .where("num", Builder.Equal, 1)
                .whereOr("str", Builder.Equal, "hoge");
        })
        .where((b) => {
            return b.where("num", "=", 3).whereOr("str", "=", "fuga");
        });
    const expectCriteria =
        "(num[equal]1[or]str[equal]hoge)[and](num[equal]3[or]str[equal]fuga)";

    test("toFilter", () => {
        expect(b.toQuery()).toEqual({ filter: expectCriteria });
    });
    test("toQuery", () => {
        expect(b.toQuery().toString()).toEqual("filter=" + expectCriteria);
    });
});
