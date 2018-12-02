// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * 1. Create and empty string called 'result'
 * 2. for each character in the string:
 *  a. IF: the character to the left is a space - capitalize it and add it to 'result'
 *  b. ELSE: add it to the 'result'
 */
function capitalize(str) {
  // must capitalize first character in the string because the loop doesn't cover it:
  let result = str[0].toUpperCase();

  // can't use for..of loop because for..of goes through the whole string, and we only want to go from the 2nd character on.
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;

// somewhat a better solution:

// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }
