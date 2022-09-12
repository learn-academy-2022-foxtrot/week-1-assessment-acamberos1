// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
// look back at notes and see if a similar example could help
// follow exampled in way that fits current problem
// set var or constant then use length if method to output the fruit with the larger word

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
if (fruit1.length>fruit2.length){
    console.log(fruit1)
} else if (fruit1.length<fruit2.length){
    console.log(fruit2)
} else {
    console.log("what happened")
}
// Expected outcome: "banana"

// Set two:

// follow similar process from last problem but adjust so const error doesnt occur
// review syntax and make fixes
// test and run
// if error shows then review 

const fruit3 = "cherry"
const fruit4 = "kiwi"

if (fruit3.length>fruit4.length){
    console.log(fruit3)
} else if (fruit3.length<fruit4.length){
    console.log(fruit4)
} else {
    console.log("lets make a smoothie")
}
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: 
// look at past tasks and look at notes if there are any that are similar
//use relational operations so console log says below, at or over the boiling point
// use if and else if and else to catch any exception out the normal range
//orginally i over complicated it but then made code that would cover all three outcomes with boiling, over boiling or below
// tested each temp to see if they worked


//const temp = 42
// Expected output: "42 is below boiling point"


const temp = 350
// Expected output: "350 is above boiling point"

 //const temp = 212
// Expected output: "212 is at boiling point"

if(temp < 212) {
    console.log("below boilingpoint")
} else if (temp === 212) {
    console.log("at boiling point")
} else {
    console.log(" above boiling")
}


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
// review notes,  look for operations that return the value
// look in notes for operation to combine arrays and consider adding .length to show the value after combining 
// decide whether to use join or concat 
// tried both but couldnt get return value or else it wouldnt show the full array
// it only works with console log

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

 padres1984WorldSeriesRuns.join(padres1998WorldSeriesRuns)
 console.log(padres1984WorldSeriesRuns)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
// looked at syllabus and found sort and reverse
// attempts reverse first by using console log with the variables
// value returns undefined 
// attempt with two console logs like exampled showed in syllabus


 const currentCohort = "Foxtrot 2022"
 currentCohort.split
// Expected output: "2202 tortxoF"

console.log(currentCohort.reverse("Foxtrot 2022"))


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// Expected output: 7

// const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
