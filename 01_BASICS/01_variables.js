const accountId=144553
let accountEmail="rajitha@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
// accountId=2         --not allowed

accountEmail="raji.com"
accountPassword="2121210"
accountCity="Bangalore"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and fuctional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


//we can declare constants in 1 way ---using const keyword
//we can declare variables using 2 keywords--- var & let
//in var there is a problem of scope, so better to use let
