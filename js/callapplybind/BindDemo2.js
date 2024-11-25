function checkPassword(login, fail) {
  let password = "1234";
  if (password == "1234") login();
  else fail();
}

let user = {
  name: "John",
  login() {
    console.log(`${this.name} just logged in`);
  },
  fail() {
    console.log(`${this.name} logged in failed`);
  },
};

checkPassword(user.login.bind(user), user.fail.bind(user));

const user2 = {
  name: "Ravi",

  login(result) {
    console.log(`${this.name} + ${result ? "logged in" : "logged in failed"}`);
  },
};

checkPassword(user2.login.bind(user2, true), user2.iflogin.bind(user2, false));
//https://youtu.be/VkmUOktYDAU?si=meb59-QVZYlDCpbK&t=1030
