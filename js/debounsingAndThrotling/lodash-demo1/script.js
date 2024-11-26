//Debounsing and   Throtling
//Questin 1: Create a button UI and add debounsing  as  follows
//              -> Show  "Button press <x>  times"  every time the button is pressed
//              -> Increase  "Trigger  <y>  times" count  after800ms of debounsingss

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-press");
const btnCount = document.querySelector(".increment-count");

let pressedCount = 0;
let triggeredCount = 0;

const debounsing = _.debounce(() => {
  btnCount.innerHTML = ++triggeredCount;
}, 800);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debounsing();
});

//Questin 1: Create a button UI and add throtling  as  follows
//              -> Show  "Button press <x>  times"  every time the button is pressed
//              -> Increase  "Trigger  <y>  times" count  after  800ms of debounsingss

const throtlingbtn = document.querySelector(".throtling-btn");
const throtlingPress = document.querySelector(".throtling-press");
const throtlingCount = document.querySelector(".throtling-count");

let throtlingPressedCount = 0;
let throtlingTriggeredCount = 0;

const throtling = _.throttle(() => {
  throtlingCount.innerHTML = ++throtlingTriggeredCount;
}, 800);

throtlingbtn.addEventListener("click", () => {
  throtlingPress.innerHTML = ++throtlingPressedCount;
  throtling();
});
