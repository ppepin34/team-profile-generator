const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office){
        // call parent constructor
        super(name, id, email);

        // create office number
        this.office = office;
    }
    
    getOffice(){
        return this.office;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;