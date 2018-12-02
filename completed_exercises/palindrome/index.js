// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// this is not very efficient: once we reach the center, we don't have to check the remaining elements, but .every() will due to str[str.length - i - 1] here.
// however, it still works.
function palindrome(str) {
  // used to do a boolean check on every element in the array
  // the callback function is invoked for every element in the array.
     // if any callback returns false, then the whole result of arr.every(..) will return false. Otherwise .every() returns true.
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// first solution:
// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }
