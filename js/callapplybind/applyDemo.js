const obj = { name: "Ravi" };

const printName = function (age, marks) {
  name = "Shobha";
  console.log(
    `name: ${this.name}, 
    age: ${age}, 
    innerName: ${name}, 
    marks: ${marks}`
  );
};

printName.apply(obj, [30, 50]);
//https://www.youtube.com/watch?v=VkmUOktYDAU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=9