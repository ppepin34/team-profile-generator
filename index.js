const generatePage = require('./src/page-template');
const writeFile = require('./src/generate-site');
const Team = require ('./lib/Team');

var team = new Team()

team.promptManager()
    // .then(generatePage(team.employees))
    // .then(pageHTML => {
    //     return writeFile(pageHTML)
    // })