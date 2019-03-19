const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  creareUser: () => {
    const user = {
      firstName: "ravi",
      secondName: "reddy "
    };
    return user;
  },
  getPrice: (p1, p2) => p1 + p2,
  fetchUsers: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "Error")
};

module.exports = functions;
//export default functions;
