const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = ''){
        // call parent class constructor
        super(name);

        // create new attributes
        this.github = ''

        // reassign role
        this.role = 'Engineer';
    }

    getRole(){
        return this.role;
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;