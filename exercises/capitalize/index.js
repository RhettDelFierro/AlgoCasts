// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return str
        .split(' ')
        .map(word => {
            const [c, ...rest] = word.split('') //dplit the individual word
            const cap = c.toUpperCase()
            return [cap, ...rest].join('') //rejoin the capital letter with the rest of the string.
        })
        .join(' ') // put the sentence together.
}

module.exports = capitalize;