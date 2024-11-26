console.log("-----------Question - 1----------");

console.log("start");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

// promise.then((data) => {
//   console.log(data);
// });
console.log("end");

// ====output====
// start
// 1
// end
// 2

console.log("-----------Question - 2----------");
console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

// promise1.then((data) => {
//   console.log(data);
// });

console.log("end");

// ====output====
// start
// 1
// 3
// end
// 2

console.log("-----------Question - 3----------");
console.log("start");
const fn = () => {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });
};
console.log("Middle");

// fn().then((data) => {
//   console.log(data);
// });

console.log("end");

// ====output====
// start
// Middle
// 1
// 3
// end
// 2

console.log("-----------Question - 4----------");
console.log("start");
function job() {
  return new Promise((resolve, reject) => {
    reject("error");
  });
}

// job()
//   .then((data) => {
//     console.log("success - 1");
//   })
//   .then((data) => {
//     console.log("success - 2");
//   })
//   .then((data) => {
//     console.log("success - 3");
//   })
//   .catch((error) => {
//     console.log("error - 1");
//   })
//   .then((data) => {
//     console.log("success - 4");
//   });

console.log("end");

// ====output====
// start
// end
// error - 1
// success - 4

console.log("-----------Question - 5----------");
console.log("start");
function work(status) {
  return new Promise((resolve, reject) => {
    if (status) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

// work(true)
//   .then((data) => {
//     console.log(data);
//     return work(false);
//   })
//   .catch((error) => {
//     console.log(error);
//     return "Error caught";
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log("end");

// ====output====
// start
// end
// success
// error
// Error caught

console.log("-----------Question - 6----------");

const promiseOne = new Promise((resolve, reject) => {
  resolve("First!");
});

const promiseTwo = new Promise((resolve, reject) => {
  resolve(promiseOne);
});

promiseTwo
  .then((data) => {
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
// ====output====
// First!
