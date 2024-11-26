//Debounsing and   Throtling
//Questin 1: Create a button UI and add debounsing  as  follows
//              -> Show  "Button press <x>  times"  every time the button is pressed
//              -> Increase  "Trigger  <y>  times" count  after800ms of debounsingss

const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-press");
const btnCount = document.querySelector(".increment-count");

let pressedCount = 0;
let triggeredCount = 0;

const myDebounsing = (fn, d) => {
  if (typeof fn !== "function") {
    throw new Error("First argument must be a function");
  }

  if (typeof d !== "number") {
    throw new Error("Second argument must be a number");
  }
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, d);
  };
};

const debounsing = myDebounsing(() => {
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

const myThrotling = (fn, d) => {
  if (typeof fn !== "function") {
    throw new Error("First argument must be a function");
  }
  if (typeof d !== "number") {
    throw new Error("Second argument must be a number");
  }
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last < d) {
      return;
    }
    last = now;
    fn(...args);
  };
};

const throtling = myThrotling(() => {
  throtlingCount.innerHTML = ++throtlingTriggeredCount;
}, 800);

throtlingbtn.addEventListener("click", () => {
  throtlingPress.innerHTML = ++throtlingPressedCount;
  throtling();
});
