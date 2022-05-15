const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site');
const Team = require ('./lib/Team');

let team = new Team().promptManager();

generatePage(team)
  .then(pageHTML => {
    writeFile(pageHTML)
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse)
  })
  .catch(err => {
    console.log(err)
  })