function func(x) {
  console.log(x);
  console.log(typeof x, arguments.length);
  console.log("--------");
}
func();
func(1);
func("1", "2", "3");
func("1", "2", "3");
func(2, 3, 4, 5);
