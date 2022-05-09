const Manager = require('../lib/Manager');

test('creates a manager object from an employee object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
    expect(manager.office).toBe('1');
    expect(manager.role).toBe('Manager');
})