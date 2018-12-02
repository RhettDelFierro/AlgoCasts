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

const getNumberOfSpaces = (step, spaces) => spaces - step
const createSteps = (steps) => [...Array(steps).keys()].map(_ => '#').join('')
const createSpaces = (numberOfSpaces) => [...Array(numberOfSpaces).keys()].map(_ => ' ').join('')
function steps(n) {
    const ints = [...Array(n).keys()].map(i => i + 1) // [1,2,3,4,5...]
    const arr = ints.reduce((acc,val) => {
        const steps = createSteps(val)
        const numberOfSpaces = getNumberOfSpaces(val, n)
        const spaces = createSpaces(numberOfSpaces)
        return [...acc, steps + spaces]
    }, [])
    arr.forEach(console.log)
}

module.exports = steps;
