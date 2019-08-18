let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve("Cleaned the Room");
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message, "Removed the Garbage");
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message, "Won icecream");
  });
};

cleanRoom()
  .then(function(message) {
    return removeGarbage(message);
  })
  .then(function(message) {
    return winIcecream(message);
  })
  .then(function(message) {
    console.log("Finished", message);
  });
