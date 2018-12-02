// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Other common variations of this problem - this solution works for them all:
  // What is the most common character in the string?
  // Does string A have the same characters as string B (is it an empty anagram)?
  // Does the given string have any repeated characters in it?

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  // note the for..in vs for..o notation.

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // compare to the cached max
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
