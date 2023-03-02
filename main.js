'use strict';


const { log } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});






// this function allows for single digit numbers to considered ramp numbers
// --------------------------------------------------------------------
function rampNumber(num) {
  let currentNum = num.toString().split("")//.map(Number);
  //console.log(currentNum);
  for (let i = 0; i < currentNum.length; i++) {
    if (currentNum[i] < currentNum[i - 1]) {
      return false;
    }
  }
  return true;
}

// // this function does NOT consider single digit numbers as ramp numbers
// // --------------------------------------------------------------------
// function rampNumber(num) {
//   let currentNum = num.toString().split("").map(Number);

//   for (let i = 0; i < currentNum.length; i++) {
//     if (currentNum.length < 2) {
//       return false;
//     } else if (currentNum.length >= 2 && currentNum[i] < currentNum[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(rampNumber(99999))

// working function!
// --------------------------------------------------------------------
// function numOfRampsBelow(num) {
//   if (num < 0 || num > 99999) {
//     return "Invalid number!";
//   }

//   let numArr = Array.from(Array(num).keys());
//   let counter = 0;
//   console.log(numArr);
// for (let i = 0; i < numArr.length; i++) {
//   // console.log(numArr[i], rampNumber(numArr[i]))

//   if (rampNumber(numArr[i])) {
//     // console.log(numArr[i])
//     counter++
//   }
// }
// // return `${counter} total ramp numbers are less than ${num}.`;
// console.log(`${counter} total ramp numbers are less than ${num}.`);
//}




// console.log(numOfRampsBelow(112))
// console.log(numOfRampsBelow(99999))
// console.log(rampNumber(12342))

// "push yourself further" - this function prints out the found ramp numbers
// -------------------------------------------------------------------------
function numOfRampsBelow(num) {
  if (num < 0 || num > 99999) {
    return "Invalid number!";
  }

  let numArr = Array.from(Array(num).keys());
  let counter = 0;

  // let rampNums = [];

  for (let i = 0; i < numArr.length; i++) {
    if (rampNumber(numArr[i])) {
      //  rampNums.push(numArr[i])
      counter++
    }
  }
  console.log(`${counter} total ramp numbers are less than ${num}.`);// The ramp numbers are: ${rampNums`;
}

//console.log(numOfRampsBelow(15))





const getPrompt = () => {
  rl.question('enter a number: ', (num) => {
    numOfRampsBelow(num);
    // rampNumber(num);
    // getPrompt();
  });
}
getPrompt();