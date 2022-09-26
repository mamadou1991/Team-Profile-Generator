const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../src");

const render = employees => {
  const html = [];

  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = changePlaceholders(template, "name", manager.getName());
  template = changePlaceholders(template, "role", manager.getRole());
  template = changePlaceholders(template, "email", manager.getEmail());
  template = changePlaceholders(template, "id", manager.getId());
  template = changePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = changePlaceholders(template, "name", engineer.getName());
  template = changePlaceholders(template, "role", engineer.getRole());
  template = changePlaceholders(template, "email", engineer.getEmail());
  template = changePlaceholders(template, "id", engineer.getId());
  template = changePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = changePlaceholders(template, "name", intern.getName());
  template = changePlaceholders(template, "role", intern.getRole());
  template = changePlaceholders(template, "email", intern.getEmail());
  template = changePlaceholders(template, "id", intern.getId());
  template = changePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return changePlaceholders(template, "team", html);
};

const changePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;