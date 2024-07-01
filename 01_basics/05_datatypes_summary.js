//primitive
//7 types:- String, Number, Boolean, null, undefined, Symbol, BogInt

const score=100;
const scoreValue=100.3;
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');

// console.log(id===anotherId);

// const bigNumber=6453213216511321231n


//non primitive (Reference)
//Array, Objects, Functions, 

const heros=["shjkhnjnm","ighjbjghj","uyjguytguy"];
let myObj={
    name:"hgdfcghf",
    age: 25,
}

// treate function as a variable
const myFunction = function(){
    console.log("Hallo World");
}

// console.log(typeof bigNumber); 
//undefined
// console.log(typeof outsideTemp);
//object
// console.log(typeof scoreValue);
//number
// console.log(typeof myFunction);
//function




//###############################################################
//memory


//Stack Memory (Primitive Datatype), Heap Memory(Non Primitive)

let myName="pritam";

let anatherName=myName;

anatherName="mishra"

console.log(myName);

console.log(anatherName);

let userOne={
    email:"ghjghjg.com",
    age:"45",
}

let userTwo=userOne;

userTwo.email="pritam@gmail.com"

console.log(userOne.email);

console.log(userTwo.email);


