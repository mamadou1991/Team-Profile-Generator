const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testParam = "UNC";
  const emp = new Intern("Amadou", 50, "amadou@gmail.com", testParam);
  expect(emp.school).toBe(testParam);
});

test("getRole() should return \"Intern\"", () => {
  const testParam = "Intern";
  const emp = new Intern("Amadou", 50, "amadou@gmail.com", "UNC");
  expect(emp.getRole()).toBe(testParam);
});

test("Can get school via getSchool()", () => {
  const testParam = "UNC";
  const emp = new Intern("Amadou", 50, "amadou@gmail.com", testParam);
  expect(emp.getSchool()).toBe(testParam);
});
