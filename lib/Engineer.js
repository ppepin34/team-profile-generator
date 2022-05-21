const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github ){
        // call parent class constructor
        super(name, id, email);

        // create new attributes
        this.github = github;
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;