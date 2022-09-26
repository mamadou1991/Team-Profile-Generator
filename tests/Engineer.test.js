const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testParam = "GitHubUser";
  const emp = new Engineer("Amadou", 50, "amadou@gmail.com", testParam);
  expect(emp.github).toBe(testParam);
});

test("getRole() should return \"Engineer\"", () => {
  const testParam = "Engineer";
  const emp = new Engineer("Amadou", 50, "amadou@gmail.com", "GitHubUser");
  expect(emp.getRole()).toBe(testParam);
});

test("Can get GitHub username via getGithub()", () => {
  const testParam = "GitHubUser";
  const emp = new Engineer("Amadou", 1, "amadou@gmail.com", testParam);
  expect(emp.getGithub()).toBe(testParam);
});
