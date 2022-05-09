const Manager = require('../lib/Manager');

test('creates a manager object from an employee object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
    expect(manager.role).toBe('Manager');
})

test("get manager's role", () => {
    const manager = new Manager('Dave');

    expect(manager.role).toBe('Manager')
})