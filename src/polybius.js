// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = {
    11: "a",
    12: "f",
    13: "l",
    14: "q",
    15: "v",
    21: "b",
    22: "g",
    23: "m",
    24: "r",
    25: "w",
    31: "c",
    32: "h",
    33: "n",
    34: "s",
    35: "x",
    41: "d",
    42: "(i/j)",
    43: "o",
    44: "t",
    45: "y",
    51: "e",
    52: "k",
    53: "p",
    54: "u",
    55: "z",
  };

  function polybius(input, encode = true) {
    // your solution code here
    //check if theres an input or return false
    if (!input) return false;
    //get the keys from the alphabet
    const objKeys = Object.keys(alphabet);
    //get the values of the objects
    const objValues = Object.values(alphabet);
    //make var to convert them all into lowercase
    const lowerCase = input.toLowerCase();
    //remove all spaces
    //let noSpace = "";
    //if encoding
    if(encode) {
      let result = "";
      for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === " ") {
          result += lowerCase[i];
        } else if (lowerCase[i] === "i" || lowerCase[i] === "j") {
          result += "42";
        } else {
          result += objKeys.find((key)=> alphabet[key] === lowerCase[i]);
        }
      }
      return result;
    }
    let noSpace = "";
    if(!encode) {
      for(let i = 0; i<lowerCase.length; i++) {
        if (lowerCase[i] !== " ") {
          noSpace += lowerCase[i];
        }
      }
      if (noSpace.length % 2 !== 0) {
        return false;
      }

      let result = "";
      for (let i = 0; i<input.length;) {
        if(input[i] === " ") {
          result += input[i];
          i++;
        } else {
          result += objValues.find((val) => val === alphabet[input.slice(i,i +2)]
          );
        i += 2;
      }
    }
          return result;
    }
  }

  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };