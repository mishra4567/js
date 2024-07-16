/* nums */

const score=400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 23.574;
// console.log(otherNumber.toPrecision(3));
/*
const secondNumber = 1123.574;
console.log(secondNumber.toPrecision(3));
*/
const thirdNumber=10000000;
// console.log(thirdNumber.toLocaleString('en-IN'));


/* maths */
// console.log(Object.getOwnPropertyNames(Math));
/*
'abs',    'acos',    'acosh',  'asin',
'asinh',  'atan',    'atanh',  'atan2',
'ceil',   'cbrt',    'expm1',  'clz32',
'cos',    'cosh',    'exp',    'floor',
'fround', 'hypot',   'imul',   'log',
'log1p',  'log2',    'log10',  'max',
'min',    'pow',     'random', 'round',
'sign',   'sin',     'sinh',   'sqrt',
'tan',    'tanh',    'trunc',  'E',
'LN10',   'LN2',     'LOG10E', 'LOG2E',
'PI',     'SQRT1_2', 'SQRT2'
*/

// console.log(Math);
// console.log(Math.abs(-4));
// 0 or 1 value
// Math.random()
// 0.1,0.32424=0 or 1 or etc
// Math.floor()

const min =10
const max =20

forthNumber=Math.random() * (max-min +1)
fifthNumber=(Math.floor(forthNumber)+min)
console.log(fifthNumber);