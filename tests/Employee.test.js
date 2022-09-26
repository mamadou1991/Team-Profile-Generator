const Employee = require("../lib/Employee");

test("Creates random Employee object", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("sets name via constructor arguments", () => {
  const testParam = "Amadou";
  const emp = new Employee(testParam);
  expect(emp.name).toBe(testParam);
});

test("sets id via constructor argument", () => {
  const testParam = 50;
  const emp = new Employee("Amadou", testParam);
  expect(emp.id).toBe(testParam);
});

test("Can set email via constructor argument", () => {
  const testParam = "amadou@gmail.com";
  const emp = new Employee("Amadou", 50, testParam);
  expect(emp.email).toBe(testParam);
});

test("Can get name via getName()", () => {
  const testParam = "Amadou";
  const emp = new Employee(testParam);
  expect(emp.getName()).toBe(testParam);
});

test("Can get id via getId()", () => {
  const testParam = 50;
  const emp = new Employee("Amadou", testParam);
  expect(emp.getId()).toBe(testParam);
});

test("Can get email via getEmail()", () => {
  const testParam = "amadou@gmail.com";
  const emp = new Employee("Amadou", 50, testParam);
  expect(emp.getEmail()).toBe(testParam);
});

test("getRole() should return \"Employee\"", () => {
  const testParam = "Employee";
  const emp = new Employee("Amadou", 50, "amadou@gmail.com");
  expect(emp.getRole()).toBe(testParam);
});
