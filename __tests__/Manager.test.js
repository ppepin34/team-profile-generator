const Manager = require('../lib/Manager');

jest.mock('../lib/Employee.js');

test('creates a manager object from an employee object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
})

test("get manager's role", () => {
    const manager = new Manager('Dave');

    expect(manager.getRole()).toBe('Manager')
})