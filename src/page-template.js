const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const generateCards = employees => {
  // console.log(employees);
  // create array empty parent array
  processedHTML = [];

  employees.forEach(employee => {
    // filter through each class
    
    // map each class through code literal
    // push each generated literal to array
    // join objects in array as singe code literal
    if (employee.getRole() === 'Manager') {
      console.log(employee.getName());
      processedHTML.push( `
            <div class="col col-md-6 col-lg-4 mb-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <h6 class="card-subtitle manager">Manager</h6>
                    <div class="">
                        <div class="id">ID: ${employee.getId()}</div>
                        <div class="email">
                        Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a>
                        </div>
                        <div class="office">Office: ${employee.getOffice()}</div>
                    </div>
                    </div>
                </div>
            </div>
            `)
    } else if (employee.getRole() === 'Engineer') {
      processedHTML.push( `
            <div class="col col-md-6 col-lg-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${employee.getName()}</h5>
                <h6 class="card-subtitle engineer">Engineer</h6>
                <div class="id">ID: ${employee.getId()}</div>
                <div class="email">
                  Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a>
                </div>
                <div class="github">
                  Github: <a href="http://github.com/${employee.getGithub()}">github.com/${employee.getGithub()}</a>
                </div>
              </div>
            </div>
          </div>
            `)
    } else if (employee.getRole() === 'Intern') {
      processedHTML.push( `
            <div class="col col-md-6 col-lg-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${employee.getName()}</h5>
              <h6 class="card-subtitle intern">Intern</h6>
              <div class="id">ID: ${employee.getId()}</div>
              <div class="email">
                Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a>
              </div>
              <div class="school">School: ${employee.getSchool()}</div>
            </div>
          </div>
        </div>
            `)
    }
  });

  let finishedHTML = processedHTML.join('');
  return finishedHTML
  
};
module.exports = team => {
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

// module.exports = generatePage()