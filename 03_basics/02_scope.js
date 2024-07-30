/*
let a =10
const b=20
var c= 30

console.log(a);
console.log(b);
console.log(c);
*/
/*
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);
*/
/*
// var c=300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);
*/
/*
let a =300
if (true) {
    let a = 10
    const b = 20
    console.log("Inner :",a);
}

console.log(a);
// console.log(b);
*/


/* Nestade Scope */

function one() {
    const username="pritam"
    function two() {
        const website="youtube"
        // console.log(username);
    }
    // console.log(website);
    // two()
}
one()

/*
if (true) {
    const userName="pritam"
    if (userName === "pritam") {
        const website =" youtube"
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);
*/

if (true) {
    const userName="pritam"
    if (userName === "pritam") {
        const website =" youtube"
    }
}
/*        *********************** Interesting *******************        */
/*
function addOne(num) {
    return num +1
}
addOne(5)
*/
/*
function addOne(num) {
    return num +1
}
addOne(5)

const addTwo= function (num) {
    return num +2
}
addTwo(5)
*/
/*
addOne(5)
function addOne(num) {
    return num +1
}

const addTwo= function (num) {
    return num +2
}
addTwo(5)
*/
/*
addOne(5)
function addOne(num) {
    return num +1
}

addTwo(5)
const addTwo= function (num) {
    return num +2
}
    */