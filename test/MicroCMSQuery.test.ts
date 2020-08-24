import MicroCMSQuery from "../src/MicroCMSQuery";
import IMicroCMSQuery from "../src/types/IMicroCMSQuery";

interface SampleInterface {
    num: number;
    str: string;
}

describe("test MicroCMSQuery class", () => {
    let query: IMicroCMSQuery<SampleInterface>;
    beforeEach(() => {
        query = new MicroCMSQuery();
    });

    describe("toString with simple query", () => {
        test("draftKey", () => {
            query.draftKey = "some_draft_key";
            expect(query.toString()).toEqual("draftKey=some_draft_key");
        });
        test("limit", () => {
            query.limit = 10;
            expect(query.toString()).toEqual("limit=10");
        });
        test("offset", () => {
            query.offset = 10;
            expect(query.toString()).toEqual("offset=10");
        });
        test("orders", () => {
            query.orders = [
                { field: "num", sort: "asc" },
                { field: "str", sort: "desc" },
            ];
            expect(query.toString()).toEqual("orders=num,-str");
        });
        test("q", () => {
            query.q = "some_query";
            expect(query.toString()).toEqual("q=some_query");
        });
        test("fields", () => {
            query.fields = ["num", "str"];
            expect(query.toString()).toEqual("fields=num,str");
        });
        test("ids", () => {
            query.ids = ["some_id1", "some_id2"];
            expect(query.toString()).toEqual("ids=some_id1,some_id2");
        });
        test("filters", () => {
            throw new Error("test not written");
        });
        test("depth", () => {
            query.depth = 3;
            expect(query.toString()).toEqual("depth=3");
        });
    });

    describe("toString with simple query means empty", () => {
        test("draftKey", () => {
            query.draftKey = "";
            expect(query.toString()).toEqual("");
        });
        test("limit", () => {
            query.limit = 0;
            expect(query.toString()).toEqual("limit=0");
            // @TODO microCMSの仕様と合致しているか確認
        });
        test("offset", () => {
            query.offset = 0;
            expect(query.toString()).toEqual("offset=0");
        });
        test("orders", () => {
            query.orders = [];
            expect(query.toString()).toEqual("");
        });
        test("q", () => {
            query.q = "";
            expect(query.toString()).toEqual("");
        });
        test("fields", () => {
            query.fields = [];
            expect(query.toString()).toEqual("");
            // @TODO microCMSの仕様と合致しているか確認
        });
        test("ids", () => {
            query.ids = [];
            expect(query.toString()).toEqual("");
            // @TODO microCMSの仕様と合致しているか確認
        });
        test("filters", () => {
            throw new Error("test not written");
        });
        test("depth", () => {
            query.depth = 1;
            expect(query.toString()).toEqual("depth=1");
        });
    });

    describe("toString with simple query which has invalid value", () => {
        test("ids", () => {
            query.ids = Array(101).map((_, index) => String(index));
            expect(query.toString()).toEqual("");
            // @TODO microCMSの仕様と合致しているか確認
        });
    });

    describe("toString with pairs of queries", () => {
        // @TODO tbw
    });

    describe("toString with invalid pairs of queries", () => {
        // @TODO tbw
    });
});
