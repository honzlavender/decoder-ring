// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitutionModule test written by Honz", () => {
    it("should include special characters such as #, $, *, etc.", () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
      const expected = "message"
      expect(actual).to.eql(expected);
  });
    it("should maintain spaces throughout", () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = 'elp xhm xf mbymwwmfj dne'
      expect(actual).to.eql(expected);
  });
    it("should ignore capital letters", () => {
      const expected = substitution("You Are An Excellent Spy", "xoyqmcgrukswaflnthdjpzibev");
      const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.eql(expected);
    });
    it("alphabet should be a string of exactly 26 characters which could include special characters such as #,$,*,etc. Otherwise return false", () => {
      const actual = substitution("thinkful", "abcdel");
      expect(actual).to.be.false;
    });
    it("all alphabet parameters must be unique otherwise return false", () => {
      const actual = substitution("thinkful", "aaaaabbbbccccdddddddddddddddd");
      expect(actual).to.be.false;
    });
})