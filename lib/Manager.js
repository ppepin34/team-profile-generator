const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name = ''){
        // call parent constructor
        super(name);

        // create office number
        this.office = '1';

        this.role = 'Manager';
    }
}

module.exports = Manager;