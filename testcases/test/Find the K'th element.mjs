// import { expect } from "chai";


// describe.only("find the k'th element in the list", ()=>{
//     context("if list is empty", ()=>{
//         it("should return nothing",()=>{
//             const result = findKthElement([]);
//             expect (result).to.be.undefined

//         })
//     })
//     context("if list have one one element", ()=>{
//         it("should return one element",()=>{
//             const result = findKthElement([1]);
//             expect (result).to.be.eql(1);

//         })
//     })
// })

// const findKthElement =(list)=>{return list}



import { expect } from "chai";

describe.only("find the k'th element in the list", ()=>{
    context("if list is empty", ()=>{
        it("should return nothing",()=>{
            const result = findKthElement([], 1); // Assuming K = 1 for an empty list
            expect(result).to.be.undefined;
        });
    });
    
    context("if list have one element", ()=>{
        it("should return the first element",()=>{
            const result = findKthElement([1], 1); // Assuming K = 1 for a list with one element
            expect(result).to.be.eql(1);
        });
    });

    context("if list has multiple elements", ()=>{
        it("should return the k'th element",()=>{
            const result = findKthElement([1, 2, 3, 4, 5], 3); // Assuming K = 3
            expect(result).to.be.eql(3);
        });
    });
});

const findKthElement = (list, k) => {
    // Check if the list is empty or if k is out of bounds
    if (list.length === 0 || k < 1 || k > list.length) {
        return undefined; // or null, depending on your preference
    }
    
    // Return the k'th element (adjusted index by 1)
    return list[k - 1];
};

 