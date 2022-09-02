"use strict";

//* 1.Print all even numbers from 0 – 10.
// for (let i = 0; i <= 10; i++) {
//   i % 2 === 0 && console.log(i);
// }

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 2.Print a table containing multiplication tables.
// const printTable = (no) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${no} x ${i} = ${no * i}`);
//   }
// };

// printTable(2);

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 3.Create a length converter function.
// const kmsToMiles = (kms) => {
//   let miles = kms * 0.62;
//   console.log(`${kms} Kms = ${miles.toFixed(2)} Miles`);
// };

// kmsToMiles(3);

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 4.Calculate the sum of numbers within an array.
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const sumofArray = (arr) => arr.reduce((curr, acc, i) => curr + acc);

// console.log(sumofArray(arr1));

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 5.Create a function that reverses an array.
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// const reverseArray=(arr)=>{
//     arr.reverse()
//     return arr
// }
// console.log(reverseArray(arr1));

// const reverseArray2 = (arr) => {
//   const reversedArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// };
// console.log(reverseArray2(arr1));

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 6.Sort an array from lowest to highest.
// const arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// const sortAscending = (arr) => {
//     return arr.sort((a, b) => a - b)
// };

// console.log(sortAscending(arr1));

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 7.Create a function that filters out negative numbers.
// const arr1 = [10, 9, 8, -7, -6, -5, -4, 3, 2, 1];

// const filterNegative = (arr) => arr.filter((no) => no > 0);

// console.log(filterNegative(arr1))

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 8.Remove the spaces found in a string.
// const str1 = "This    is a string     with lots of unneccesary    spaces.";

// const removeSpace = (str) => {
//   const strWithoutSpaces = str
//     .split(" ")
//     .filter((word) => word !== "")
//     .join(" ");

//   return strWithoutSpaces;
// };
// console.log(removeSpace(str1));

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 9.Return a Boolean if a number is divisible by 10.
// const returnBoolean = (no) => {
//   const bool = no % 10 === 0;
//   return bool;
// };

// console.log(returnBoolean(100));

//////////////////////////////////////////////
//////////////////////////////////////////////

//* 10.Return the number of vowels in a string.
// const noOfVowels = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let vowelsCount = 0;
//   const strArr = str.toLowerCase().split("");

//   for (let i = 0; i < strArr.length; i++) {
//     const element = strArr[i];

//     if (vowels.includes(element)) {
//       vowelsCount++;
//     }
//   }

//   return vowelsCount;
// };

// console.log(noOfVowels("This is a string"));
