const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testParam = 50;
  const emp = new Manager("Amadou", 1, "amadou@gmail.com", testParam);
  expect(emp.officeNumber).toBe(testParam);
});

test('getRole() should return "Manager"', () => {
  const testParam = "Manager";
  const emp = new Manager("Amadou", 1, "amadou@gmail.com", 100);
  expect(emp.getRole()).toBe(testParam);
});

test("Can get office number via getOffice()", () => {
  const testParam = 50;
  const emp = new Manager("Amadou", 1, "amadou@gmail.com", testParam);
  expect(emp.getOfficeNumber()).toBe(testParam);
});
