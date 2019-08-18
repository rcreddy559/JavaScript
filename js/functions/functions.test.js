const functions = require("./functions");

test("add 1+1 is 2", () => {
  expect(functions.add(1, 1)).toBe(2);
});

test("User should be Ravi Reddy", () => {
  expect(functions.creareUser()).toEqual({
    firstName: "ravi",
    secondName: "reddy "
  });
});

test("Price should be 1600", () => {
  expect(functions.getPrice(800, 800)).toBe(1600);
});

//Regular Expresions
test("Regular expresions", () => {
  expect("test").not.toMatch("/I/");
});

// Arrays
test("should ", () => {
  const roles = ["user", "admin", "superadmin"];
  expect(roles).toContain("superadmin");
});

// test("User featched should ", () => {
//   expect.assertions(1);
//   return functions.fetchUsers().then(data => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

// test("User fetched should be", async () => {
//   // expect.assertions(1);
//   const data = await functions.fetchUsers();
//   //expect(data.name).toEqual("Leanne Graham");
// });
