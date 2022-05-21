const Employee = require('../lib/Employee');

test('create new employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@gmail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(1);
    expect(employee.email).toEqual(expect.any(String));
})

test("get employee's name", () => {

    var name = 'Dave'
    const employee = new Employee(name);

    expect(employee.getName()).toBe('Dave');
})

test("get employee's ID", () => {

    var id = '123'
    const employee = new Employee('dave', id);
    
    expect(employee.getId()).toBe('123');
})

test("get employee's email", () => {

    var email = 'this@gmail.com'
    const employee = new Employee('Dave', '1', email);

    expect(employee.getEmail()).toBe('this@gmail.com')
})

test("get employee's role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Employee')
})