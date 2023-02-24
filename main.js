'use strict';


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function numOfRampsBelow(num) {
    let numArray = Array.from(Array(num).keys());
    let counter = 0;
    let bigNumArr = [];

    numArray.forEach(num => {
        bigNumArr.push(num.toString().split(""))

    })

    // console.log(bigNumArr)

    for (let i = 0; i < bigNumArr.length; i++) {
        for (let j = 0; j < bigNumArr[i].length; j++) {
            if (bigNumArr[i][j] >= bigNumArr[i][j-1]) {
                counter++
            }
        }
    }

console.log( `${counter} total ramp numbers are less than ${num}`)

}

















const getPrompt = () => {
    rl.question('enter a number: ', (num) => {
        numOfRampsBelow(num);
        // getPrompt();
      });
  }
  getPrompt();