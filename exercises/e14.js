
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(accounts) {
  // Your code goes here...
  const accountsWithIncorrectBalance = [];

  for (const account of accounts) {
    let depositSum = 0;
    if (account.deposits) {
      for (const deposit of account.deposits) {
        depositSum += deposit; 
      }
    }

    let withdrawalSum = 0;
    if (account.withdrawals) {
      for (const withdrawal of account.withdrawals) {
        withdrawalSum += withdrawal;
      }
    }

    const calculatedBalance = depositSum - withdrawalSum;

    if (calculatedBalance !== account.balance) {
      accountsWithIncorrectBalance.push({
        id: account.id,
        name: account.name,
        balance: account.balance,
        deposits: account.deposits,
        withdrawals: account.withdrawals
      });
    }
  }

  return accountsWithIncorrectBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
