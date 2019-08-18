var addTwo = passed => {
  let inner = 2;
  return inner + passed;
};

console.log(addTwo(3));

for (var i = 0; i < 3; i++) {
  (i =>
    setTimeout(() => {
      console.log(i);
    }, 100))(i);
}
