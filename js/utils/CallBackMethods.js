const myFun = function() {
  console.log(" This is Call back method!");
};

const demo = function(fun) {
  console.log("This is demo function");
  fun();
};

// demo(myFun);

const add = (a, b) => {
  return a + b;
};

const multiply = (a, b) => {
  return a * b;
};

const myOperation = function(a, b, fun) {
  return fun(a, b);
};

console.log(myOperation(2, 3, multiply));
