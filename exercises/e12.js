
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  let deposits = [];
  for (let i = 0; i < array.length; i++) {
    let dep = array[i].deposits || [];
    let newArr = [];
    for (let j = 0; j < dep.length; j++) {
      if(dep[j] > 100) {
        newArr.push(dep[j])
      }
    } 
      if(newArr.length > 0) {
        for (let k = 0; k < newArr.length; k++) {
          deposits.push(newArr[k]);
      }
    }
  } return deposits;
} 






// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
