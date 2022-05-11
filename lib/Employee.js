class Employee {
  constructor(name = '') {
    this.name = name;
    // id = input from prompt
    this.id = '';
    // email = input from prompt
    this.email = "";
    // role = employee
    this.role = "Employee";
  }

  // gets employee's name
  getName() {
    return this.name;
  }

  // gets employee's id
  getId() {
    return this.id;
  }

  // gets employee's email
  getEmail() {
    return this.email;
  }

  // get employee's role for this object. It will always return `Employee`. Will be overwritten by subsequent classes
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
