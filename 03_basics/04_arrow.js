/*
const user={
    username:"pritam",
    price:"999",
    welcomeMessage:function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="hfghvhgv"
// user.welcomeMessage()
// console.log(this);
*/
/*
function chai() {
    console.log(this);
}
chai()
*/
/*
function chai() {
    let username="pritam"
    console.log(this);
}
chai()
*/
/*
function chai() {
    let username="pritam"
    console.log(this.username);
}
chai()
*/
/*
const chai=function () {
    let username="pritam"
    console.log(this.username);
}
chai()
*/
/*
const chai=()=> {
    let username="pritam"
    console.log(this.username);
}
chai()
*/
//             Arrow function
/*
//explesite return
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));
*/
/*
//impleset return
const addTwo=(num1,num2)=> num1+num2

console.log(addTwo(3,4));
*/

//impleset return
/*
const addTwo=(num1,num2)=> (num1+num2)

console.log(addTwo(3,4));
*/
/*
const addTwo=(num1,num2)=> {username:"hfghv"}

console.log(addTwo(3,4));
//output: undefined
*/
/*
const addTwo=(num1,num2)=> ({username:"hfghv"})

console.log(addTwo(3,4));
*/

const myArroy=[2,5,8,6,3]

// myArroy.forEach(function(){})
// myArroy.forEach(()=>{})