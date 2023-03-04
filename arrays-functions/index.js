// Question 1: What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

    // Mutating array methods in JavaScript are array methods that modify the original array. These methods change the length of the array, add or remove elements, or modify existing elements of the array. 
    /** Examples mutating array methods in JavaScript are:
     * a. Array.prototype.pop()
     * b. Array.prototype.push()
     * c. Array.prototype.shift()
     * d. Array.prototype.sort()
     * e. Array.prototype.splice()
    */

    // Non-mutation array methods in JavaScript are array methods that do not modify the original array but instead return a new array.
    /** Examples Non-mutation array methods in JavaScript are:
     * a. Array.prototype.slice()
     * b. Array.prototype.concat()
     * c. Array.prototype.map()
     * d. Array.prototype.filter()
     * e. Array.prototype.includes()
     */


// Question 2: Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
// Add ‘Kotlin’ to the end of the array
// Add ‘Java’ after ‘Ruby’
// Remove the first item in the array
// Add ’Scala’ and ‘Swift’ to the beginning of the array
// Replace ‘PHP’ with ‘Go’ and ‘Rust’

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

// Adding ‘Kotlin’ to the end of the array
languages.push('Kotlin');

// Adding ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java')

// Removing the first item in the array
languages.shift()

// Adding ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift')

// Replacing ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust')
//OR
languages.splice(languages.indexOf('PHP'), 1, 'Go', 'Rust')



// What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

console.log(changeFruit(fruit))    
//[ 'apple', 'mango', 'orange' ]



// Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

function maxNum(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }

console.log(maxNum([3, 9, 22, 88, 76, 45, 99, 24, 101, 455, 6, 3, 2, 2]));

// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]