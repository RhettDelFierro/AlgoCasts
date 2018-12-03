// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelList = ['a','e','i','o','u']
    const counts = str
        .toLowerCase()
        .split('')
        .reduce((tally, char) => {
            if (!tally[char]) tally[char] = 1
            else tally[char] = tally[char] + 1

            return tally
        }, {})
    return Object.keys(counts).filter(key => vowelList.includes(key)).length
}

module.exports = vowels;
