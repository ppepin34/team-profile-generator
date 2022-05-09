const { default: TestRunner } = require('jest-runner');
const Employee = require('../lib/Employee');

test('create new employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
})

test("get employee's name", () => {
    const employee = new Employee('Dave');

    expect(employee.getName()).toEqual(expect.any(String))
})

test("get employee's ID", () => {
    const employee = new Employee('Dave');
    
    expect(employee.getId()).toEqual(expect.any(Number));
})

test("get employee's email", () => {
    const employee = new Employee('Dave');

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test("get employee's role", () => {
    const employee = new Employee('Dave');

    expect(employee.getRole()).toBe('Employee')
})