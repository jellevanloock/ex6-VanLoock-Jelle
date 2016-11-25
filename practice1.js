var Account = {};
Account.name = "John Doe";
Account.balance = 0;
console.log(Account.balance);

function deposit(account, amount){
  account.balance+=amount;
  console.log("Uw huidige saldo: " + account.balance);
};

function withdraw(account, amount){
    account.balance-=amount;
    console.log("Uw huidige saldo: " + account.balance);
};

function getBalance(account){
  return account.balance;
};

deposit(Account, 50);
withdraw(Account, 20);
console.log(getBalance(Account));