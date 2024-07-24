//singleton
// Object.create

//object literals

const mySym = Symbol("key1")
const jsuser={
    name:"Pritam",
    "full name":"pritam mishra",
    [mySym]:"mykey1",
    age:56,
    email:"pritam@sgrdg.com",
    location:"uyghjkgjhgb",
    isLogin:false,
    lastLoginDays:["monday","saturday"],
}
/*
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email="pritam@chat.com"
Object.freeze(jsuser)
jsuser.email="pritam@microsoft.com"
console.log(jsuser);
*/

jsuser.greeting=function(){
    console.log("hallo js user");
}
jsuser.greetingTwo=function(){
    console.log(`hallo js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

