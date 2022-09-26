
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");

const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "main.html");


const render = require("./lib/renderHtml.js");

let Team = [];

const start = () => {
    inquirer.prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "Which team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "Manager",
            "I don't want to add any more team members"
          ]
        }
      ]).then(userChoice => {
        if(userChoice.memberChoice === "Engineer") {
        
          addEngineer();
        }else if (userChoice.memberChoice === "Intern"){
        
          addIntern();
        }else if(userChoice.memberChoice === "Manager"){
            addManager();
        }
        
        else {
         
          createTeam();
        }
      });
}

function addManager(){
    console.log("Please enter the Manager's info");
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's Email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        Team.push(manager);
        start();
    });
}

const addEngineer = () => {
  console.log("Please enter the engineer's info");
  inquirer.prompt([
      {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?"
      },
      {
          type: "input",
          name: "engineerID",
          message: "What is the engineer's ID number?"
      },
      {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's Email?"
      },
      {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's Github account name?"
      }
  ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
      Team.push(engineer);
      start();
  });
}

const addIntern = () => {
  console.log("Please enter the intern's info");
  inquirer.prompt([
      {
          type: "input",
          name: "internName",
          message: "What is the intern's name?"
      },
      {
          type: "input",
          name: "internID",
          message: "What is the intern's ID number?"
      },
      {
          type: "input",
          name: "internEmail",
          message: "What is the intern's Email?"
      },
      {
          type: "input",
          name: "internSchool",
          message: "What is the intern's school?"
      }
  ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
      Team.push(intern);
      start();
  });
}

const createTeam = () => {

fs.writeFileSync(distPath, render(Team),'utf-8', err => {
    if (err) {throw new Error(err);

    
  } else{ 
    console.log('Page created! Check out src directory to see it!');

  }
  

})
}

start();