//Dates

let myDate = new Date
// console.log(typeof myDate);
// =object

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// =16/7/2024, 9:09:53 pm
// =Tue Jul 16 2024 21:05:11 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());
// =Tue Jul 16 2024
// console.log(myDate.toISOString());
// =2024-07-16T15:36:57.534Z
// console.log(myDate.toJSON());
// 2024-07-16T15:37:46.343Z
// console.log(myDate.toLocaleDateString());
// =16/7/2024
// console.log(myDate.toLocaleTimeString());
// =9:10:25 pm
// console.log(myDate.toTimeString());
// =21:10:55 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString());
// =Tue, 16 Jul 2024 15:41:30 GMT

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(myTimeStamp/1000);
// XXX
// console.log(Math.floor(myTimeStamp/1000));

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
/* 
String Interpoletion
`${newDate.getDay()} and time`
*/
newDate.toLocaleString('default',{
    weekday:"long"
})