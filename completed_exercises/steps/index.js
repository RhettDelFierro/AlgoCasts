// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/**
 *  
 */
function steps(n, row = 0, stair = '') {
  // we have hit the end of our problem.
  if (n === row) {
    return;
  }

  // we are at the end of a row
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // If the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space. 
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;


/**
 *
 * Main: From 0 to n:
 *  1. Create an empty string, 'stair'
 *  2. From 0 to n:
 *     IF the current column is equal to or less than the current row: add a '#' to 'stair'
 *     ELSE: add a space to 'stair'
 *  3. console log 'stair'
 */

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }
