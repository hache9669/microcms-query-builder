import doubleFunc from "../src";

describe("doubleFunc", (): void => {
    test("should be 2", () => {
        const result = doubleFunc(1);
        expect(result).toBe(2);
    });

    test("should be 1.5", () => {
        const result = doubleFunc(0.75);
        expect(result).toBe(1.5);
    });

    test("should be -8", () => {
        const result = doubleFunc(-4);
        expect(result).toBe(-8);
    });

    test("should be 0", () => {
        const result = doubleFunc(0);
        expect(result).toBe(0);
    });
});
