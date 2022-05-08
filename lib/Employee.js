function Employee(name = "") {
  this.name = name;
  // id = input from prompt
  this.id = 0;
  // email = input from prompt
  this.email = "";
  // role = employee
  this.role = "Employee";

  // gets employee's name
  this.getName = function () {
    return this.name;
  };

  // gets employee's id
  this.getId = function () {
    return this.id;
  };

  // gets employee's email
  this.getEmail = function () {
    return this.email;
  };

  // get employee's role for this object. It will always return `Employee`. Will be overwritten by subsequent classes
  this.getRole = function () {
    return this.role;
  };
}

module.exports = Employee;
