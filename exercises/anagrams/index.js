// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const checkAB = stringA
        .toLowerCase()
        .split('')
        .every((c) => stringB.toLowerCase().split('').includes(c))

    const checkBA = stringB
        .toLowerCase()
        .split('')
        .every((c) => stringA.toLowerCase().split('').includes(c))

    return checkAB && checkBA
}

module.exports = anagrams;