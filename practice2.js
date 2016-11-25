var Accounts = [];
var jan = ({username: "Jan", balance: 0});
var jef = ({username: "Jef", balance:50});

function createAccount(account){
  Accounts.push(account);
  return account;
};

function getAccount(username){
  var matchedAccount;
  Accounts.forEach(function(internal_account){
      if(internal_account.username === username){
          matchedAccount = internal_account;
      };
  });
  return matchedAccount;
};
console.log(createAccount(jan));
console.log(createAccount(jef));
console.log(getAccount("Jan"));
console.log(Accounts);