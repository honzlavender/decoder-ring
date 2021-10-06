// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

// Write your tests here!

describe("polybiusModule test written by Honz", () => {
    it("should maintain spaces throughout", () => {
      const actual = polybiusModule.polybius("Hello world");
      const expected = '3251131343 2543241341';
      expect(actual).to.eql(expected);
  });
    it("should ignore capital letters.", () => {
      const actual = polybiusModule.polybius("Hello world");
      const expected = '3251131343 2543241341'
      expect(actual).to.eql(expected);
  });
    it("should still be a string when encoding", () => {
      const actual = polybiusModule.polybius("thinkful");
      const expected = "4432423352125413"
      expect(actual).to.eql(expected);
  });
    it("should always return an even string of numbers *excluding spaces* when decoding - otherwise return false", () =>{
      const actual = polybiusModule.polybius("44324233521254134", false);
      expect(actual).to.be.false;
    });
    it("should return 42 when encoding i/j but when decoding should show both letters", () => {
      const actual = polybiusModule.polybius("4432423352125413", false);
      const expected =  "th(i/j)nkful";
      expect(actual).to.eql(expected);
    });
})
