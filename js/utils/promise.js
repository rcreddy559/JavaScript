let cleanTheRoom = new Promise(function(resolve, reject) {
  let isClean = false;

  if (isClean) {
    resolve("Clean");
  } else {
    reject("not clean");
  }
});

cleanTheRoom
  .then(function(dataFromResolve) {
    console.log(dataFromResolve);
  })
  .catch(function(dataFromReject) {
    console.log(dataFromReject);
  });
