// const chai = require('chai');
// import chai from 'chai';
import { expect } from "chai";

// const expect = chai.expect;

describe.only("find last element in a list", () => {
  context("when is list empty", () => {
    it("should return nothing", () => {
      const result = findLastElement([]);
      expect(result).to.be.undefined;
    });
  });

  context("when  list contains only one element", () => {
    it("should return first element", () => {
      const result = findLastElement([100]);
      expect(result).to.be.eql(100);
    });
  });
  context("when the list have many elements", () => {
    it("should return last element", () => {
      const result = findLastElement([100, 101, 102]);
      expect(result).to.be.eql(102);
    });
  });
});
const findLastElement = (list) => {
  return list[list.length - 1];
};

// var assert = require('assert');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
