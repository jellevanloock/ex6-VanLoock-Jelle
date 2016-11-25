var accounts = [];

function createAccount(account){
    accounts.push(account);
    return account;
};

function getAccount(username){
  var i;
  var matchedaccount;
  for(i=0; i<accounts.length; i++){
      if(accounts[i].username === username){
          matchedaccount = accounts[i];
      };
  };
  return matchedaccount;
};

function deposit(account, amount){
    if(amount>0 && !isNaN(parseInt(amount))){
        return account.balance+=amount;
    }
    else{
        throw 'Het getal is kleiner dan 0 of niet numeriek';
    };
};

function withdraw(account, amount){
    if(amount>0 && !isNaN(parseInt(amount))){
        return account.balance-=amount;
    }
    else{
        throw 'Het getal is kleiner dan 0 of niet numeriek';
    };
};

function getBalance(user){
    account = getAccount(user);
    //console.log(getAccount("Jan"));
    return function(){
        return account.balance;
    };
};

//accounts
var jan = ({username:"Jan", balance:0});
var jef = ({username:"Jef", balance:500});

//createAccount eerst uitvoeren voor getBalance, anders is account undefined
console.log(createAccount(jan));
console.log(createAccount(jef));
console.log(getAccount("Jef"));
console.log(deposit(jan, 1));
console.log(withdraw(jan,5));
console.log(accounts);
console.log(getBalance("Jan")('balance'));