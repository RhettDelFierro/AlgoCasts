// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  // note: for the case when n = -15: 'reversed' willl be '51-' and parseInt() will fix this (but will return it back as 51 and not -51)
  //parseInt and .toString() are inverses of each other.
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
