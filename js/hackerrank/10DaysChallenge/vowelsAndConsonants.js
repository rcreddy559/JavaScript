//https://www.hackerrank.com/challenges/js10-loops/problem

function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i of s) {
    if (vowels.includes(i)) {
      console.log(i);
    }
  }
  console.log("-");
  for (let j of s) {
    if (!vowels.includes(j)) {
      console.log(j);
    }
  }
}

function vowelsAndConsonants2(s) {
  const vowels = "aeiou";
  var consonants = "";

  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }
  console.log(consonants.trim());
}

vowelsAndConsonants2("javascript");

console.log(7 > 6 > 5);
