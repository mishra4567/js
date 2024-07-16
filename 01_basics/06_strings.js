
const name ="pritam ";
const repoCount =50;

// console.log(name+ repoCount+ " value");


// console.log(`Hello My name is${name} and my repo count is${repoCount}`);

const gameName=new String('pritam');

// console.log(gameName[0]);
// 
// console.log(gameName.__proto__);
// 
// console.log(gameName.length);
// 
// console.log(gameName.toUpperCase());
// 
// console.log(gameName.charAt(3));

const newString =gameName.substring(0,4)

// console.log(newString);

const anotherString =gameName.slice(-2,5)

// console.log(anotherString);

const newStringOne ="      pritam     "

// console.log(newStringOne);
// console.log(newStringOne.trim());

const url="https://pritam.com/iushhhgj%20hjjhjhjh";

console.log(url.replace('%20','_'));
console.log(url.includes('pritam'));
console.log(gameName.split());