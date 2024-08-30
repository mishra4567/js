const clock = document.getElementById("clock");
//  OR   const clock = document.querySelector('#clock');
/*
let date = new Date();
console.log(date.toLocaleString());
*/
/*
setInterval(function () {
  let date = new Date();
      console.log(date.toLocaleString());
}, 1000);
*/

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
