const myNums = [1, 2, 3];
/*
const myTotal = myNums.reduce(function (acc, curval) {
  return acc + curval;
}, 0);
*/
/*
const myTotal = myNums.reduce(function (acc, curval) {
  console.log(`acc:${acc} and carval:${curval}`);

  return acc + curval;
}, 0);
*/
/*
const myTotal = myNums.reduce(function (acc, curval) {
  console.log(`acc:${acc} and carval:${curval}`);

  return acc + curval;
}, 3);
*/
/*
const myTotal = myNums.reduce((acc, curval) => acc + curval, 0);
console.log(myTotal);
*/
const shoppingCart = [
  {
    itemName: "js course",
    price: 565,
  },
  {
    itemName: "py course",
    price: 895,
  },
  {
    itemName: "java course",
    price: 6987,
  },
];

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(price);
