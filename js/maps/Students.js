const students = [
  { name: "ravi", rollNumber: 20, marks: 40 },
  { name: "shobha", rollNumber: 30, marks: 60 },
  { name: "Divija", rollNumber: 60, marks: 80 },
];

let namesUp = [];

for (let i = 0; i < students.length; i++) {
  namesUp[i] = students[i].name.toUpperCase();
}

console.log(namesUp);

const list = students.map((std) => {
  return std.name.toUpperCase();
});

console.log(list);

const stu1 = students
  .filter((std, i) => {
    return std.marks > 50;
  })
  .reduce((acc, curr, i) => {
    return acc + curr.marks;
  }, 0);
console.log(stu1);
