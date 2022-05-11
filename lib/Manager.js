const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = ''){
        // call parent constructor
        super(name);

        // create office number
        this.office = '0';

        this.role = 'Manager';
    }

    getRole(){
        return this.role;
    }
}

module.exports = Manager;