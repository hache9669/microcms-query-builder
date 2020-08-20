import Builder from "../src";
import SampleInterface from "./interface";

describe("test Builder class", () => {
    let builder: Builder<SampleInterface>;

    beforeEach(() => {
        builder = new Builder<SampleInterface>();
    });

    describe("test each WHERE methods with number prop", () => {
        test("equals", () => {
            const query = builder.equals("num", 1);
            throw new Error("test not written");
        });

        test("notEquals", () => {
            const query = builder.notEquals("num", 1);
            throw new Error("test not written");
        });

        test("lessThan", () => {
            const query = builder.lessThan("num", 1);
            throw new Error("test not written");
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("num", 1);
            throw new Error("test not written");
        });

        test("contains", () => {
            const query = builder.contains("num", 1);
            throw new Error("test not written");
        });

        test("exists", () => {
            const query = builder.exists("num");
            throw new Error("test not written");
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("num", 1);
            throw new Error("test not written");
        });

        test("where", () => {
            const query = builder.where("num", "=", 1);
            throw new Error("test not written");
        });

        test("whereOr", () => {
            const query = builder.whereOr("num", "=", 1);
            throw new Error("test not written");
        });
    });

    describe("test each WHERE methods with string prop", () => {
        test("equals", () => {
            const query = builder.equals("str", "some_text");
            throw new Error("test not written");
        });

        test("notEquals", () => {
            const query = builder.notEquals("str", "some_text");
            throw new Error("test not written");
        });

        test("lessThan", () => {
            const query = builder.lessThan("str", "some_text");
            throw new Error("test not written");
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("str", "some_text");
            throw new Error("test not written");
        });

        test("contains", () => {
            const query = builder.contains("str", "some_text");
            throw new Error("test not written");
        });

        test("exists", () => {
            const query = builder.exists("str");
            throw new Error("test not written");
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("str", "some_text");
            throw new Error("test not written");
        });

        test("where", () => {
            const query = builder.where("str", "=", "some_text");
            throw new Error("test not written");
        });

        test("whereOr", () => {
            const query = builder.whereOr("str", "=", "some_text");
            throw new Error("test not written");
        });
    });

    describe("test each WHERE methods with boolean prop", () => {
        test("equals", () => {
            const query = builder.equals("bol", true);
            throw new Error("test not written");
        });

        test("notEquals", () => {
            const query = builder.notEquals("bol", true);
            throw new Error("test not written");
        });

        test("lessThan", () => {
            const query = builder.lessThan("bol", true);
            throw new Error("test not written");
        });

        test("greaterThan", () => {
            const query = builder.greaterThan("bol", true);
            throw new Error("test not written");
        });

        test("contains", () => {
            const query = builder.contains("bol", true);
            throw new Error("test not written");
        });

        test("exists", () => {
            const query = builder.exists("bol");
            throw new Error("test not written");
        });

        test("beginsWith", () => {
            const query = builder.beginsWith("bol", true);
            throw new Error("test not written");
        });

        test("where", () => {
            const query = builder.where("bol", "=", true);
            throw new Error("test not written");
        });

        test("whereOr", () => {
            const query = builder.whereOr("bol", "=", true);
            throw new Error("test not written");
        });
    });
});
