'use strict';


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


    



function rampNumber(num){

if(num<0 || num>99999){
        return;
    }

  var enterNumber = num.toString().split("").map(Number);
  for (let i=0; i<enterNumber.length; i++)
  { console.log(enterNumber[i])
    if (enterNumber[i] < enterNumber[i-1])
    {
      return false;
    }
  }
  return true;
  
}


// console.log(rampNumber(11234));
// console.log(rampNumber(99990));


function numOfRampsBelow(num) {
    // let numArray = Array.from(Array(num).keys());
    let counter = 0;
    // let bigNumArr = [];
    let bigNum = num
    // console.log(bigNumArr)

    for (let i = 0; i < bigNum; i++) {
        console.log(bigNum[i])
        if(rampNumber(bigNum)) {
            counter++
        
        }
        bigNum = bigNum - 1;
        // for (let j = 0; j < rampNumber[i].length; j++) {
        //     if (rampNumber[i][j] >= rampNumber[i][j-1]) {
        //         counter++
        //     }
        // }
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