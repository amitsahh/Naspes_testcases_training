import { expect } from "chai";

describe.only("reverse a list", () => {
    context("when list is empty", () => {
        it("should return nothing", () => {
            const result = reverseList([]);
            expect(result).to.be.undefined;
        });
    });

    context("when the list has one element", () => {
        it("should return one element", () => {
            const result = reverseList([1]);
            expect(result).to.be.eql([1]);
        });
    });

    context("when the list has more than two elements", () => {
        it("should return reversed list", () => {
            const result = reverseList([1, 2, 3]);
            expect(result).to.be.eql([3, 2, 1]);
        });
    });
});

const reverseList = (list) => {
    if (list.length === 0) {
        return undefined;
    }
    const reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
};