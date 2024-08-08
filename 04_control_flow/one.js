// if statment
//                          <,>,<=,>=,==,!=,===,!==
/*
if (true) {
    
}
*/
/*
if (false) {
    
}
*/
/*
const isUserLoggedIn=true
if (isUserLoggedIn) {
    
}
//2<=2
//3!=2
*/
/*
if (2=="2") {
    console.log("executed");
}
*/
/*
if (2==="2") {
    console.log("executed");
}
*/
/*
if (2!=3) {
    console.log("executed");
}
*/
/*
const isUserLoggedIn=true
const temperature=41
if (temperature<50) {
    console.log("less than 50");
}
console.log("temperature greater than 50");
*/
/*
const isUserLoggedIn=true
const temperature=41
if (temperature===41) {
    console.log("less than 50");
}
console.log("temperature greater than 50");
*/
/*
const isUserLoggedIn=true
const temperature=41
if (temperature===41) {
    console.log("less than 50");
}else{
    console.log("temperature greater than 50");
}
console.log("exicuted");
*/
/*
const isUserLoggedIn=true
const temperature=41
if (temperature===40) {
    console.log("less than 50");
}else{
    console.log("temperature greater than 50");
}
console.log("exicuted");
*/

// const score =200
/*
if (score > 100) {
    const power="fly"
    console.log(`User Power: ${power}`);
}
console.log(`User Power: ${power}`);
*/
/*
if (score > 100) {
    var power="fly"
    console.log(`User Power: ${power}`);
}
console.log(`User Power: ${power}`);
*/

// const balance =1000
/*
if(balance > 500)console.log("test");
//That is not prefareble
*/
/*
if (balance < 500) {
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if (balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
*/

const isUserLoggedIn=true
const debitCard = true
const logdInfromGoogle=false
const logdInfromEmail = true

if (isUserLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}
if (logdInfromGoogle || logdInfromEmail) {
    console.log("User logged in");
}
