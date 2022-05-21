const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        // get parent class constructor
        super(name, id, email);
        
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;