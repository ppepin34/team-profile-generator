const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateCards = employees => {
  // console.log(employees);
    employees.forEach(employee => {
        if (employee.role = 'Manager') {
            return `
            <div class="col col-md-6 col-lg-4 mb-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${this.getName}</h5>
                    <h6 class="card-subtitle manager">Manager</h6>
                    <div class="">
                        <div class="id">${this.getId}</div>
                        <div class="email">
                        Email: <a href="mailto: ${this.getEmail}">${this.getEmail}</a>
                        </div>
                        <div class="office">${this.getOffice}</div>
                    </div>
                    </div>
                </div>
            </div>
            `
        } else if (employee.role = 'Engineer') {
            return `
            <div class="col col-md-6 col-lg-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-subtitle engineer">Engineer</h6>
                <div class="id">${this.getId}</div>
                <div class="email">
                  Email: <a href="mailto: ${this.getEmail}">${this.getEmail}</a>
                </div>
                <div class="github">
                  Github: <a href="http://github.com/${this.github}">github.com/${this.github}</a>
                </div>
              </div>
            </div>
          </div>
            `
        } else if (employee.role = 'Intern') {
            return `
            <div class="col col-md-6 col-lg-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <h6 class="card-subtitle intern">Intern</h6>
              <div class="id">${this.id}</div>
              <div class="email">
                Email: <a href="mailto: ${this.email}"${this.email}</a>
              </div>
              <div class="school">${this.school}</div>
            </div>
          </div>
        </div>
            `
        }
    })
};
module.exports = team => {
    console.log(team)
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>My Team</title>
  </head>
  <body>
    <h1 class="text-white bg-danger p-5 mb-5 text-center">My Team</h1>
    <main>
    <div id="employees" class="container">
    <div class="row justify-content-around">
    ${generateCards(team)}
    </div>
    </div>
    </main>
    </body>
    </html>
    `
};