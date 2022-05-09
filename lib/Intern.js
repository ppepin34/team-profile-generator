const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = ''){
        // get parent class constructor
        super(name);
        
        this.school = '';
        this.role = 'Intern';
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Intern;