// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const caesarModule = (function () {
    // you can add any code you want within this function scope
  
    function caesar(input, shift, encode = true) {
      //check if shift = 0, < -25, > 25 or is not present - if any return false
      if(shift === 0 || shift < -25 || shift > 25 || !shift) return false;
      //here we create an array of all lowercase letters a-z
      let alphabet = [];
      for (let i = 0; i < 26; i++) {
          alphabet.push(String.fromCharCode(97+i))
      }
        //return the input - split each 'word' and then map the characters together
        return input.split('').map((char) => {
            //if in the alphabet the inputted char is included this will make them lower case and encode the message
            if(alphabet.includes(char.toLowerCase()) && encode) {
                //return the string converted from the ASCII table using fromCharCode
                //make sure the char are all lowercase
                //when encode is true
                //turn each char into ASCII values add the 'shift' and subtracting 97
                //modulo 26 the given # and add 26 and then modulo that and add 97
            return String.fromCharCode(((char.toLowerCase().charCodeAt()+shift-97)%26+26)%26+97)
            } 
            //do same thing if encode is false except subtract the 'shift'
            else if(alphabet.includes(char.toLowerCase())&& !encode) {
            return String.fromCharCode(((char.toLowerCase().charCodeAt()-shift-97)%26+26)%26+97)
            }
            //if the character isn't in the alphabet array return exactly as is. i.e: !,.&,etc
            else {
                return char
            }
            //.join the array of mapped chars
        }).join('')
    }
    return {
      caesar,
    };
  })();

module.exports = { caesar: caesarModule.caesar };
