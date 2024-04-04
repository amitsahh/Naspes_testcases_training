import { expect } from "chai";

describe.only("find the k'th element in the list", () => {
  context("if list is empty", () => {
    it("should return nothing", () => {
      const result = findKthElement([], 1);
      expect(result).to.be.undefined;
    });
  });

  context("if list have one element", () => {
    it("should return the first element", () => {
      const result = findKthElement([1], 1);
      expect(result).to.be.eql(1);
    });
  });

  context("if list has multiple elements", () => {
    it("should return the k'th element", () => {
      const result = findKthElement([1, 2, 3, 4, 5], 3);
      expect(result).to.be.eql(3);
    });
  });
});

const findKthElement = (list, k) => {
  if (list.length === 0 || k < 1 || k > list.length) {
    return undefined;
  }

  return list[k - 1];
};
