import * as moment from "moment";

import FilterBuilder from "../src/FilterBuilder";
import { IMicroCMSParam } from "../src/types/IMicroCMSQuery";
import SampleInterface from "./interface";

describe("test FilterBuilder class", () => {
    let builder: FilterBuilder<SampleInterface>;

    beforeEach(() => {
        builder = new FilterBuilder<SampleInterface>();
    });

    describe("test each WHERE methods with number prop", () => {
        test("equals", () => {
            const query = builder.equals("num", 1).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.Equal,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const query = builder.notEquals("num", 1).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.NotEqual,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("lessThan", () => {
            const query = builder.lessThan("num", 1).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.LessThan,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("num", 1).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.GreaterThan,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("contains", () => {
            const query = builder.contains("num", 1).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.Contains,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const query = builder.exists("num").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.Exists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notExists", () => {
            const query = builder.notExists("num").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.NotExists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("num", 1).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "num",
                    comparator: FilterBuilder.BeginsWith,
                    value: 1,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    describe("test each WHERE methods with string prop", () => {
        test("equals", () => {
            const query = builder.equals("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.Equal,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const query = builder.notEquals("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.NotEqual,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("lessThan", () => {
            const query = builder.lessThan("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.LessThan,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.GreaterThan,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("contains", () => {
            const query = builder.contains("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.Contains,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const query = builder.exists("str").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.Exists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notExists", () => {
            const query = builder.notExists("str").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.NotExists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("str", "some_text").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "str",
                    comparator: FilterBuilder.BeginsWith,
                    value: "some_text",
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    describe("test each WHERE methods with boolean prop", () => {
        test("equals", () => {
            const query = builder.equals("bol", true).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: FilterBuilder.Equal,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notEquals", () => {
            const query = builder.notEquals("bol", true).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: FilterBuilder.NotEqual,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("lessThan", () => {
            const query = builder.lessThan("bol", true).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: FilterBuilder.LessThan,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("bol", true).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: FilterBuilder.GreaterThan,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("contains", () => {
            const query = builder.contains("bol", true).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: FilterBuilder.Contains,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("exists", () => {
            const query = builder.exists("bol").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: FilterBuilder.Exists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("notExists", () => {
            const query = builder.notExists("bol").toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: FilterBuilder.NotExists,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("bol", true).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "bol",
                    comparator: FilterBuilder.BeginsWith,
                    value: true,
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    // describe("test each WHERE methods with Date prop", () => {
    //     test("equals", () => {
    //         const query = builder
    //             .equals("dat", new Date("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "dat",
    //                 comparator: FilterBuilder.Equal,
    //                 value: new Date("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("notEquals", () => {
    //         const query = builder
    //             .notEquals("dat", new Date("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "dat",
    //                 comparator: FilterBuilder.NotEqual,
    //                 value: new Date("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("lessThan", () => {
    //         const query = builder
    //             .lessThan("dat", new Date("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "dat",
    //                 comparator: FilterBuilder.LessThan,
    //                 value: new Date("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("greaterThan", () => {
    //         const query = builder
    //             .greaterThan("dat", new Date("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "dat",
    //                 comparator: FilterBuilder.GreaterThan,
    //                 value: new Date("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("contains", () => {
    //         const query = builder
    //             .contains("dat", new Date("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "dat",
    //                 comparator: FilterBuilder.Contains,
    //                 value: new Date("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("exists", () => {
    //         const query = builder.exists("dat").toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "dat",
    //                 comparator: FilterBuilder.Exists,
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("notExists", () => {
    //         const query = builder.notExists("dat").toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "dat",
    //                 comparator: FilterBuilder.NotExists,
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("beginsWith", () => {
    //         const query = builder
    //             .beginsWith("dat", new Date("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "dat",
    //                 comparator: FilterBuilder.BeginsWith,
    //                 value: new Date("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });
    // });

    // describe("test each WHERE methods with moment prop", () => {
    //     test("equals", () => {
    //         const query = builder.equals("mom", moment("2020-01-01")).toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "mom",
    //                 comparator: FilterBuilder.Equal,
    //                 value: moment("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("notEquals", () => {
    //         const query = builder
    //             .notEquals("mom", moment("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "mom",
    //                 comparator: FilterBuilder.NotEqual,
    //                 value: moment("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("lessThan", () => {
    //         const query = builder
    //             .lessThan("mom", moment("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "mom",
    //                 comparator: FilterBuilder.LessThan,
    //                 value: moment("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("greaterThan", () => {
    //         const query = builder
    //             .greaterThan("mom", moment("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "mom",
    //                 comparator: FilterBuilder.GreaterThan,
    //                 value: moment("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("contains", () => {
    //         const query = builder
    //             .contains("mom", moment("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "mom",
    //                 comparator: FilterBuilder.Contains,
    //                 value: moment("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("exists", () => {
    //         const query = builder.exists("mom").toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "mom",
    //                 comparator: FilterBuilder.Exists,
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("notExists", () => {
    //         const query = builder.notExists("mom").toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "mom",
    //                 comparator: FilterBuilder.NotExists,
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });

    //     test("beginsWith", () => {
    //         const query = builder
    //             .beginsWith("mom", moment("2020-01-01"))
    //             .toQuery();
    //         const expectedQuery: IMicroCMSParam<SampleInterface> = {
    //             filters: {
    //                 type: "SINGLE",
    //                 field: "mom",
    //                 comparator: FilterBuilder.BeginsWith,
    //                 value: moment("2020-01-01"),
    //             },
    //         };
    //         expect(query).toEqual(expect.objectContaining(expectedQuery));
    //     });
    // });

    describe("test each WHERE methods with Object prop", () => {
        test("equals", () => {
            const query = builder.equals("obj", { id: "some_id" }).toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "obj",
                    comparator: FilterBuilder.Equal,
                    value: { id: "some_id" },
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });

    describe("test each WHERE methods with Array prop", () => {
        test("contains", () => {
            const query = builder
                .contains("arr", [{ id: "some_id1" }, { id: "some_id2" }])
                .toQuery();
            const expectedQuery: IMicroCMSParam<SampleInterface> = {
                filters: {
                    type: "SINGLE",
                    field: "arr",
                    comparator: FilterBuilder.Contains,
                    value: [{ id: "some_id1" }, { id: "some_id2" }],
                },
            };
            expect(query).toEqual(expect.objectContaining(expectedQuery));
        });
    });
});
