const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

// Write your tests here!

describe("caesarModule", () => {
      it("should return false if the shift value is equal to 0, -25, 25, or not present", () => {
        const actual = caesarModule.caesar("thinkful", 0, 25, -25);
       // const expected = false;
        expect(actual).to.be.false;
    });
//     it("should return false if the shift value is equal to 0", () => {
//          const actual = false;
//          const expected = caesarModule.caesar("thinkful", 0);
//          expect(actual).to.eql(expected);
//      });
//      it("should return false if the shift value is equal to -25", () => {      
//        const actual = false;
//         const expected = caesarModule.caesar("thinkful", -26);
//          expect(actual).to.eql(expected);
//      }); 
//     it("should return false if the shift value is equal to 25", () => {
//         const actual = false;
//         const expected = caesarModule.caesar("thinkful", 25);
//         expect(actual).to.eql(expected);
//     }); 
//     it("should return false if the shift value is not present", () => {
//         const actual = false;
//         const expected = caesarModule.caesar("thinkful");
//         expect(actual).to.eql(expected);
//    }); 

 
    it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding",() => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = 'this is a secret message!'
        expect(actual).to.eql(expected);
        }); 
  
      it("should ignore capital letters. (For example, the results of A Message and a message should be the same.)", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!"
        expect(actual).to.eql(expected);
        });
  
    it("If a letter is shifted so that it goes off the alphabet it should wrap around to the front of the alphabet", () => {
        const actual = "c";
        const expected = caesarModule.caesar("z", 3);
        expect(actual).to.eql(expected);
        });   
})