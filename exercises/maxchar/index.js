// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //list to single value means a fold/monoid type.
    // use .reduce to keep a running count.
      // possibly reducing to an object { char: x, count: n}
    const counts = str.split('').reduce((tally, char) => {
        if (!tally[char]) tally[char] = 1
        else tally[char] = tally[char] + 1
        
        return tally
    }, {})

   return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b); 
}

module.exports = maxChar;
