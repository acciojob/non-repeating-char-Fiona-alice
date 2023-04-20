//your JS code here. If required.
function firstNonRepeatedCharacter(str) {
  // create an object to store the count of each character
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // loop through the string again and return the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  // if there is no non-repeated character, return null
  return null; 
}

const input = prompt("Enter a string:");
const result = firstNonRepeatedCharacter(input);
alert(result ? result : null);
