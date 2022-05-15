const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function Team() {
  this.manager;
  this.employees = [];
  this.employeesData = [];
};

// initial prompt for information about the manager
Team.prototype.promptManager = function () {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the manager on this team?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a name.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee ID of the manager on this team?",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the id.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter an email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "office",
      message: "What is the manager's office number?",
      validate: (officeInput) => {
        if (officeInput) {
          return true;
        } else {
          console.log("Please enter the office number.");
          return false;
        }
      },
    },
  ])
  // destructure prompt into new Manager object

  .then (({ name, id, email, office }) => {
    this.manager = new Manager(name, id, email, office);

    this.employees.push(this.manager);

    this.promptEmployees();
  })
};

Team.prototype.promptEmployees = function (){
  // create initial array for employees

  console.log(`
    ===============
    Add an Employee
    ===============
    `);

  return (
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message: "Is this team-member an engineer or intern?",
          choices: ["Engineer", "Intern"],
        },
        {
          type: "input",
          name: "name",
          message: "What is the employee's name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter a name.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee's ID number?",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter the id.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What's the employee's email address?",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter an email address.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "What is the employee's github username?",
          validate: (githubInput) => {
            if (githubInput) {
              return true;
            } else {
              console.log("Please enter a github username.");
              return false;
            }
          },
          // only ask if the employee is an engineer
          when: ({ role }) => {
            if (role === "Engineer") {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "What is the employee's school?",
          validate: (schoolInput) => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Please enter a school name.");
              return false;
            }
          },
          // only ask if employee is an intern
          when: ({ role }) => {
            if (role === "Intern") {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "confirm",
          name: "confirmAddEmployee",
          message: "Would you like to add another employee?",
          default: false,
        },
      ])
      // push employee info to array, if confirmAddEmployee then loop
      .then((employeeData) => {
        this.employeesData.push(employeeData);
        if (employeeData.confirmAddEmployee) {
          return this.promptEmployees();
        } else {
            return this.destructure();
        }
      })
  );
};

Team.prototype.destructure = function() {
    let engineers = this.employeesData.filter(employee => employee.role === 'Engineer');

    engineers.map(({ name, id, email, github}) => {
        engineer = new Engineer(name, id, email, github)
        this.employees.push(engineer);
    })

    let interns = this.employeesData.filter(employee => employee.role === 'Intern');

    interns.map(({ name, id, email, school}) => {
        intern = new Intern(name, id, email, school)
        this.employees.push(intern);
    })
};

module.exports = Team;