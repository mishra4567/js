/*const promiseOne = new Promise(function (resolve, reject) {
  //Don an async tasc
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});
*/
/*
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});
*/
/*
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Pritam", email: "pritam@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});
*/
/*
promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ userName: "pritam", password: "123456" });
    } else {
      reject("ERROR: Somthing went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Finaly The promise ");
  });
*/
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = false;
      if (!error) {
        resolve({ userName: "pritam", password: "123456" });
      } else {
        reject("ERROR: Somthing went wrong");
      }
    }, 1000);
})

async function consumePromiseFive() {
    const responce = await promiseFive
    console.log(responce);
    
}