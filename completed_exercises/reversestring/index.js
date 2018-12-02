// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// first solution
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }


// second solution
/*
  1. Create an empty string called 'reversed'
  2. for each character in the provided string:
     a. take the character and add it to the start of 'reversed'
  3. return the vairable 'reversed'  
*/
// function reverse(str) {
//   let reversed = '';
//
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }
