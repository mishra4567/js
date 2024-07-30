// Immeediately Invoked Function Expressions (IIFE)
/*
function chai() {
    console.log('DB CONNECTD');
}
chai()
*/
/*
(function chai() {
    console.log('DB CONNECTD');
})()
*/
// (/* function definetion */)(/* exiqution call */)
/*
(function chai() {
//named IIFE
    console.log('DB CONNECTD');
})();  //use ";" The javascript could not stop this 
(()=>{
    console.log('DB CONNECTD TWO');
})();
*/

((name)=>{
    console.log(`DB CONNECTD TWO ${name}`);
})('pritam');