import { expect } from "chai";

describe.only("find the last but one in a list ", ()=>{
     context("when list is empty", ()=>{
            it("should return nothing", ()=>{
                const result  = findLastOne([]);
                expect (result).to.be.undefined;
            })
     })
     context("when the list have one element", ()=>{
        it("should return one element", ()=>{
            const result  = findLastOne([1]);
            expect (result).to.be.undefined;
        })
 })
 context("when the list have two element", ()=>{
    it("should return first element", ()=>{
        const result  = findLastOne([1,2]);
        expect (result).to.be.eql(1);
    })
})
context("when the list have more then two elements", ()=>{
    it("should return 2nd last element", ()=>{
        const result  = findLastOne([1,2,3]);
        expect (result).to.be.eql(2);
    })
})
})

const findLastOne = (list)=>{return list[list.length-2]}
