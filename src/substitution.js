// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
    const dadAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //const dadAlphabet = "abcdefghijklmnopqrstuvwxyz"
    if (!alphabet || alphabet.length !== 26) return false;
    
    input = input.toLowerCase();
    let final = "";
    //const dadAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const abcArr = alphabet.split('');
    let duplicate = abcArr.some((currentValue, currentIndex) => 
    abcArr.indexOf(currentValue) !== currentIndex);
    if (duplicate) return false;
//console.log(duplicate)
    for (let i = 0; i < input.length; i++) {
      if(input[i] === " ") final += " ";
      if (encode) {
        index = dadAlphabet.indexOf(input.charAt(i))
        final += alphabet.charAt(index)
      } else {
        index = alphabet.indexOf(input.charAt(i))
        final += dadAlphabet.charAt(index)
      }
    }
      return final
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
