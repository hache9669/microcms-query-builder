import Builder from "../src/Builder";
import IMicroCMSQuery from "../src/types/IMicroCMSQuery";
import SampleInterface from "./interface";

describe("test Builder class", () => {
    let builder: Builder<SampleInterface>;

    beforeEach(() => {
        builder = new Builder<SampleInterface>();
    });

    describe("test each WHERE methods with number prop", () => {
        test("equals", () => {
            const query = builder.equals("num", 1).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.Equal,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const query = builder.notEquals("num", 1).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.NotEqual,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("lessThan", () => {
            const query = builder.lessThan("num", 1).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.LessThan,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("num", 1).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.GreaterThan,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("contains", () => {
            const query = builder.contains("num", 1).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.Contains,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const query = builder.exists("num").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.Exists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notExists", () => {
            const query = builder.notExists("num").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.NotExists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("num", 1).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.BeginsWith,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("where", () => {
            const query = builder.where("num", "=", 1).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.Equal,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("whereOr", () => {
            const query = builder.whereOr("num", "=", 1).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: Builder.Equal,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    describe("test each WHERE methods with string prop", () => {
        test("equals", () => {
            const query = builder.equals("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.Equal,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const query = builder.notEquals("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.NotEqual,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("lessThan", () => {
            const query = builder.lessThan("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.LessThan,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.GreaterThan,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("contains", () => {
            const query = builder.contains("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.Contains,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const query = builder.exists("str").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.Exists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notExists", () => {
            const query = builder.notExists("str").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.NotExists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.BeginsWith,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("where", () => {
            const query = builder.where("str", "=", "some_text").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.Equal,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("whereOr", () => {
            const query = builder.whereOr("str", "=", "some_text").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: Builder.Equal,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    describe("test each WHERE methods with boolean prop", () => {
        test("equals", () => {
            const query = builder.equals("bol", true).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.Equal,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const query = builder.notEquals("bol", true).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.NotEqual,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("lessThan", () => {
            const query = builder.lessThan("bol", true).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.LessThan,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("bol", true).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.GreaterThan,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("contains", () => {
            const query = builder.contains("bol", true).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.Contains,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const query = builder.exists("bol").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.Exists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notExists", () => {
            const query = builder.notExists("bol").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.NotExists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("bol", true).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.BeginsWith,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("where", () => {
            const query = builder.where("bol", "=", true).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.Equal,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("whereOr", () => {
            const query = builder.whereOr("bol", "=", true).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: Builder.Equal,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });
});
