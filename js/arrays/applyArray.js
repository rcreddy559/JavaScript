const numns = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];

alpha.push.apply(numns, alpha);
console.log(numns);
//https://youtu.be/VkmUOktYDAU?si=KektcxkwZ0vI0YQf&t=750
