const accountId=123777
let accountEmail="nitesh@google.com"
var accountpassword="12345"
accountcity="Deoria"
let accountstate;
// accountId=2 //not allowed
accountEmail="Ritesh@google.com"
accountpassword="17745"
accountcity="gkp"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope
*/
console.table([accountId,accountEmail,accountpassword,accountcity,accountstate])
