const accountId =144553 //const not change
let accountEmail ="pritam@gmail.com" //let scope problem solv
var accountPassword="12345"  //var scope problem
accountCity="kolkata"  // not to use
let accountState;
/* 
prefer not to use var
because of issue in block scope and functional scope
*/

// accountId=2 //not allowed
accountEmail="hgfhgf.com"
accountPassword="565767"
accountCity="fhghfhg"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])