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

function balancechange(account, amount){
    this.amount = amount;
    this.account = getAccount(account);
    this.currentamount = getBalance(account)('balance');
    this.deposit = function(){
           if(this.amount>0 && !isNaN(parseInt(this.amount))){
            return this.account.balance+=this.amount;
           }
           else{
            throw 'Het getal is kleiner dan 0 of niet numeriek!';
            };
        };
    this.withdraw = function(){
            if(this.amount>0 && !isNaN(parseInt(this.amount)) && this.currentamount>this.amount){
                return this.account.balance-=this.amount;
            }
            else{
            throw 'Het getal is kleiner dan 0 of niet numeriek of je huidige saldo is te laag!';
            };
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
var jan = createAccount({username:"Jan", balance:0});
var jef = createAccount({username:"Jef", balance:500});

// new is noodzakelijk, anders krijg je een error!
console.log(new balancechange("Jan", 2.65).deposit());
console.log(new balancechange("Jef", 600).withdraw());