//singleton
// const tinderUser= new Object()
//non singleton
const tinderUser= {}
tinderUser.id="123abc"
tinderUser.name="pritam"
tinderUser.isLoggedIn=false

// console.log(tinderUser);
const regulerUser={
    email:"jghghvgh.com",
    fullName:{
        userFullName:{
            firstName:"pritam",
            lastName:"mishra",
        }
    }
}
// console.log(regulerUser.fullName.userFullName.firstName);
const object1={1:"a",2:"b"}
const object2={3:"a",4:"b"}
const object5={5:"a",6:"b"}

// const object3={object1,object2}
// const object4=Object.assign(object1,object2)
// const object4=Object.assign({},object1,object2,object5)
// const object6={...object1,...object2,...object5}

// console.log(object6);

const users=[
    {
        id:1,
        email:"p@gmail.com",
    },
    {
        id:1,
        email:"p@gmail.com",
    },
    {
        id:1,
        email:"p@gmail.com",
    },
]
users[1].email
/*
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
*/
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));





