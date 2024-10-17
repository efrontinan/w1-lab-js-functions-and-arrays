// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(value1, value2) {
    if(value1 > value2){
        return value1
    } else if (value1<value2){
        return value2
    } else{
        return (value1 || value2)
    }
}




// Iteration 2 | Find the Longest Word

/*Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

The function should return null if an empty array is passed as an argument.*/

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayofWords1) {
    if (arrayofWords1.length === 0) {
        return null
    }
    let longestWord = ""
    for ( let i=0; i < arrayofWords1.length; i++){
        if (longestWord.length < arrayofWords1[i].length) {
            longestWord = arrayofWords1 [i]
        }
    }
    return longestWord
}




// Iteration 3 | Sum Numbers

/*Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named sumNumbers that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Later in the course, we will learn how to do this using the reduce array method, making your work significantly easier. For now, let's practice the "declarative" way of adding values using loops.

You can use the following array to test your solution:*/

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let result = 0
    for (let i= 0; i < arrayOfNumbers.length; i++){
    result = result + arrayOfNumbers[i]
    }
    return result
}





// Iteration 4 | Numbers Average

/*Calculating an average is a prevalent task. So let's practice it a bit.

The logic behind this:

Find the sum as we did in the first exercise (or how about reusing the function sumNumbers()?)
Divide that sum by the number of elements in the array.

Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.*/

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersArr) {
    if (numbersArr.length === 0) {
        return 0
    }
    const sumResult = sumNumbers(numbersArr)
    return sumResult / numbersArr.length

}




// Iteration 5 | Find Elements

/*Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument and a word to search for as the other. Return true if the word exists in the array; otherwise, return false.

The function should return null if an empty array is passed as an argument.

You can use the following array to test your solution:*/

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {
    if (arrayOfWords.length === 0) {
        return null
    }
    for ( let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i] === word){
            return true
        }
    }
   return false
}

