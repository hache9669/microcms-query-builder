import * as moment from "moment";

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

    describe("test each WHERE methods with Date prop", () => {
        test("equals", () => {
            const query = builder
                .equals("dat", new Date("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.Equal,
                    value: new Date("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const query = builder
                .notEquals("dat", new Date("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.NotEqual,
                    value: new Date("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("lessThan", () => {
            const query = builder
                .lessThan("dat", new Date("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.LessThan,
                    value: new Date("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("greaterThan", () => {
            const query = builder
                .greaterThan("dat", new Date("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.GreaterThan,
                    value: new Date("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("contains", () => {
            const query = builder
                .contains("dat", new Date("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.Contains,
                    value: new Date("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const query = builder.exists("dat").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.Exists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notExists", () => {
            const query = builder.notExists("dat").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.NotExists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("beginsWith", () => {
            const query = builder
                .beginsWith("dat", new Date("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.BeginsWith,
                    value: new Date("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("where", () => {
            const query = builder
                .where("dat", "=", new Date("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.Equal,
                    value: new Date("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("whereOr", () => {
            const query = builder
                .whereOr("dat", "=", new Date("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "dat",
                    comparator: Builder.Equal,
                    value: new Date("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    describe("test each WHERE methods with moment prop", () => {
        test("equals", () => {
            const query = builder.equals("mom", moment("2020-01-01")).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.Equal,
                    value: moment("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const query = builder
                .notEquals("mom", moment("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.NotEqual,
                    value: moment("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("lessThan", () => {
            const query = builder
                .lessThan("mom", moment("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.LessThan,
                    value: moment("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("greaterThan", () => {
            const query = builder
                .greaterThan("mom", moment("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.GreaterThan,
                    value: moment("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("contains", () => {
            const query = builder
                .contains("mom", moment("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.Contains,
                    value: moment("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const query = builder.exists("mom").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.Exists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notExists", () => {
            const query = builder.notExists("mom").toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.NotExists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("beginsWith", () => {
            const query = builder
                .beginsWith("mom", moment("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.BeginsWith,
                    value: moment("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("where", () => {
            const query = builder
                .where("mom", "=", moment("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.Equal,
                    value: moment("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("whereOr", () => {
            const query = builder
                .whereOr("mom", "=", moment("2020-01-01"))
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "mom",
                    comparator: Builder.Equal,
                    value: moment("2020-01-01"),
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    describe("test each WHERE methods with Object prop", () => {
        test("equals", () => {
            const query = builder.equals("obj", { id: "some_id" }).toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "obj",
                    comparator: Builder.Equal,
                    value: { id: "some_id" },
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const buildQuery = () =>
                builder.notEquals("obj", { id: "some_id" }).toQuery();
            expect(buildQuery).toThrowError();
        });

        test("lessThan", () => {
            const buildQuery = () =>
                builder.lessThan("obj", { id: "some_id" }).toQuery();
            expect(buildQuery).toThrowError();
        });

        test("greaterThan", () => {
            const buildQuery = () =>
                builder.greaterThan("obj", { id: "some_id" }).toQuery();
            expect(buildQuery).toThrowError();
        });

        test("contains", () => {
            const buildQuery = () =>
                builder.contains("obj", { id: "some_id" }).toQuery();
            expect(buildQuery).toThrowError();
        });

        test("exists", () => {
            const buildQuery = () => builder.exists("obj").toQuery();
            expect(buildQuery).toThrowError();
        });

        test("notExists", () => {
            const buildQuery = () => builder.notExists("obj").toQuery();
            expect(buildQuery).toThrowError();
        });

        test("beginsWith", () => {
            const buildQuery = () =>
                builder.beginsWith("obj", { id: "some_id" }).toQuery();
            expect(buildQuery).toThrowError();
        });

        test("where", () => {
            const query = builder
                .where("obj", "=", { id: "some_id" })
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "obj",
                    comparator: Builder.Equal,
                    value: { id: "some_id" },
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("whereOr", () => {
            const query = builder
                .whereOr("obj", "=", { id: "some_id" })
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "obj",
                    comparator: Builder.Equal,
                    value: { id: "some_id" },
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    describe("test each WHERE methods with Object prop", () => {
        test("equals", () => {
            const buildQuery = () =>
                builder
                    .equals("arr", [{ id: "some_id1" }, { id: "some_id2" }])
                    .toQuery();
            expect(buildQuery).toThrowError();
        });

        test("notEquals", () => {
            const buildQuery = () =>
                builder
                    .notEquals("arr", [{ id: "some_id1" }, { id: "some_id2" }])
                    .toQuery();
            expect(buildQuery).toThrowError();
        });

        test("lessThan", () => {
            const buildQuery = () =>
                builder
                    .lessThan("arr", [{ id: "some_id1" }, { id: "some_id2" }])
                    .toQuery();
            expect(buildQuery).toThrowError();
        });

        test("greaterThan", () => {
            const buildQuery = () =>
                builder
                    .greaterThan("arr", [
                        { id: "some_id1" },
                        { id: "some_id2" },
                    ])
                    .toQuery();
            expect(buildQuery).toThrowError();
        });

        test("contains", () => {
            const query = builder
                .contains("arr", [{ id: "some_id1" }, { id: "some_id2" }])
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "arr",
                    comparator: Builder.Contains,
                    value: [{ id: "some_id1" }, { id: "some_id2" }],
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const buildQuery = () => builder.exists("arr").toQuery();
            expect(buildQuery).toThrowError();
        });

        test("notExists", () => {
            const buildQuery = () => builder.notExists("arr").toQuery();
            expect(buildQuery).toThrowError();
        });

        test("beginsWith", () => {
            const buildQuery = () =>
                builder
                    .beginsWith("arr", [{ id: "some_id1" }, { id: "some_id2" }])
                    .toQuery();
            expect(buildQuery).toThrowError();
        });

        test("where", () => {
            const query = builder
                .where("arr", Builder.Contains, [
                    { id: "some_id1" },
                    { id: "some_id2" },
                ])
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "arr",
                    comparator: Builder.Contains,
                    value: [{ id: "some_id1" }, { id: "some_id2" }],
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("whereOr", () => {
            const query = builder
                .whereOr("arr", Builder.Contains, [
                    { id: "some_id1" },
                    { id: "some_id2" },
                ])
                .toQuery();
            const expectedQuery: IMicroCMSQuery<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "arr",
                    comparator: Builder.Contains,
                    value: [{ id: "some_id1" }, { id: "some_id2" }],
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });
});
