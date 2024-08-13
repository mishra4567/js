const coding = ["js", "rb", "py", "java", "cpp"];
/*
const values = coding.forEach((item) => {
  console.log(item);
});
console.log(values);
*/
/*
const values = coding.forEach((item) => {
  console.log(item);
  return item;
});
console.log(values);
*/
/*
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumber.filter((num) => num > 4);
console.log(newNums);
*/
/*
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNumber.filter((num) => {
  num > 4;
});
console.log(newNums);
*/

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
const newNums = myNumber.filter((num) => {
  return num > 4;
});
*/
/*
const newNums = [];

myNumber.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);
*/

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1889 },
];
/*
const userBooks = books.filter((bk) => bk.genre === "History");

const userBooks=books.filter((bk)=>{bk.publish>=2000})
*/
/*
const userBooks = books.filter((bk) => bk.genre === "History");

 userBooks = books.filter((bk) => { bk.publish >= 2000 })
*/
/*
let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  bk.publish >= 2000;
});
*/
/*
let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 2000;
});
*/

let userBooks = books.filter((bk) => bk.genre === "History");

userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);
