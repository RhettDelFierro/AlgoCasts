// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const isDivisible = x => y => y % x === 0
const isDivisibleByThree = isDivisible(3)
const isDivisibleByFive = isDivisible(5)
const isDivisibleByThreeAndFive = n => isDivisibleByThree(n) && isDivisibleByFive(n)

const generateTerm = (n) => {
    if (isDivisibleByThreeAndFive(n)) return "fizzbuzz"
    if (isDivisibleByThree(n)) return "fizz"
    if (isDivisibleByFive(n)) return "buzz"
    return n
}

function fizzBuzz(n) {
    // get a range of ints starting from 1:
    const ints = [...Array(n).keys()].map(i => i + 1) // [1,2,3,4,5...]
    const results = ints.reduce((acc, n) => {
        return [...acc, generateTerm(n)]
    }, [])

    results.forEach(console.log)
}

module.exports = fizzBuzz;
