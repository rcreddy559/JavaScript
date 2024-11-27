// todo: pending
function promisePolyFill(executor) {
  console.log("----------Promise polyfill-----------------");
  let onResolve,
    onReject,
    isFullFilled = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullFilled = true;
    if (typeof onResolve === "function") {
      value = val;
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(val) {
    if (isFullFilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFullFilled && !isCalled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    return this;
  };

  executor(resolve, reject);
}

const myPromise = new promisePolyFill((resolve, reject) => {
  reject("error");
});

myPromise
  .then((value) => {
    console.log(`then  value: ${value}`);
  })
  .catch((error) => {
    console.log(`catch error: ${error}`);
  });
