function sayMyName(){
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");
    console.log("f");
}
// sayMyName()
/*
function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,4)
*/
/*
function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,"4")
*/
/*
function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,"a")
*/
/*
function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,null)
*/
/*
function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
const result = addTwoNumbers(3,4)
console.log("Result",result);
*/
/*
function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
}
const result = addTwoNumbers(3,4)
console.log("Result",result);
*/
/*
function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result
    console.log("jfghjgvb");
}
const result = addTwoNumbers(3,4)
console.log("Result",result);
*/
/*
function addTwoNumbers(number1,number2){
    return number1+number2
}
const result = addTwoNumbers(3,4)
console.log("Result",result);
*/

function addTwoNumbers(number1,number2){
    return number1+number2
}
const result = addTwoNumbers(3,4)
// console.log("Result",result);
/*
function loginUserMessage(userName){
    return`${userName} just logged in`
}
console.log( loginUserMessage("hbbhbjbnn"));
*/
/*
function loginUserMessage(userName){
    return`${userName} just logged in`
}
console.log( loginUserMessage());
*/
/*
function loginUserMessage(userName){
    if(userName===undefined){
        console.log("Please enter a username");
        return
    }
    return`${userName} just logged in`
}
console.log( loginUserMessage());
*/
/*
function loginUserMessage(userName = "sam"){
    if(!userName){
        console.log("Please enter a username");
        return
    }
    return`${userName} just logged in`
}
console.log( loginUserMessage("gfdcfg"));
*/
//27.07.2024:
/*

*/
/*
function calculateCartPrice(...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500));
console.log(calculateCartPrice(300,500,800));
*/
/*
function calculateCartPrice(val1,val2,...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500));
console.log(calculateCartPrice(300,500,800,1000));
*/
// Object
/*
const user ={
    userName:"pritam",
    prices:199,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(user)
*/
/*
const user ={
    userName:"pritam",
    prices:199,
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject({
    userName:"gfdggv",
    price:399,
})
*/
/*
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
*/
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue([500,700,800,300]));