//Event  Propagation
//Question: what is  bubbling

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

// div.addEventListener("click", fun);
// form.addEventListener("click", fun);
// button.addEventListener("click", fun);

// console.log("---------Question  - 1------------------");
// console.log("event.currentTarget  vs  event.target vs this.target");
// console.log("event.currentTarget  and  this.target are same,  but ");

// function fun(event) {
//   alert(`   Current Target: ${event.currentTarget.tagName}\n
//             Target: ${event.target.tagName}\n
//             This:  ${this.tagName}`);
// }

console.log("---------Question  - 1------------------");
// What is event capturing/Tritling
// Answer: event capturing/Tritling  is top to bottom

// div.addEventListener(
//   "click",
//   () => {
//     alert("div");
//   },
//   { capture: true }
// );
// form.addEventListener(
//   "click",
//   () => {
//     alert("form");
//   },
//   { capture: true }
// );
// button.addEventListener(
//   "click",
//   () => {
//     alert("button");
//   },
//   { capture: true }
// );

console.log("---------Question  - 2 ------------------");
// how to stop  event  propagation or bubbling
// Answer: e.stopPropagation();

// div.addEventListener("click", (e) => {
//   e.stopPropagation();
//   alert("div");
// });
// form.addEventListener("click", (e) => {
//   e.stopPropagation();
//   alert("form");
// });
// button.addEventListener("click", (e) => {
//   e.stopPropagation();
//   alert("button");
// });
console.log("---------Question  - 3 ------------------");
// what  is  event  delegation
// Answer:  event delegation is  bottom to top

// div.addEventListener("click", (e) => {
//   e.stopPropagation();
//   alert("div");
// });
// form.addEventListener("click", (e) => {
//   e.stopPropagation();
//   alert("form");
// });
// button.addEventListener("click", (e) => {
//   e.stopPropagation();
//   alert("button");
// });

console.log("---------Question  - 3 ------------------");
// what  is  event  delegation
document.querySelector(".products").addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.closest("SPAN");
  console.log(e.target.tagName);
  if (e.target.tagName === "SPAN") {
    window.location.href += "/" + e.target.tagName;
  }
});
