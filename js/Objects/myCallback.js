var length = 4;

function callback() {
  //   console.log(this);
  console.log(this.length);
  console.log(length);
}

const obj = {
  length: 5,
  method() {
    console.log(arguments);
    arguments[0]();
  },
  getLenght() {
    callback();
  },
  get(fn) {
    fn();
  },
};

obj.method(callback, 2, 3);
console.log("------------------------------------------------------");

obj.getLenght();
console.log("------------------------------------------------------");
obj.get(callback);
//https://youtu.be/rv7Q11KWmKU?si=zuul30BIZsSIHgZB&t=1097
