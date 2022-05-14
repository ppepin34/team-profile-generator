const Manager = require('../lib/Manager');

test('creates a manager object from an employee object', () => {
    var name = 'Dave';
    var id = 123;
    var email = 'dave@gmail.com'
    var office = 456;
    
    const manager = new Manager(name, 123, email, office);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(123);
    expect(manager.email).toBe('dave@gmail.com')
    expect(manager.office).toBe(456);
    expect(manager.role).toBe('Manager');
})

test("get manager's office", () => {
    const office = 123;
    const manager = new Manager('dave', 1, 'this', office);

    expect(manager.office).toBe(123);
})
test("get manager's role", () => {
    const manager = new Manager('Dave');

    expect(manager.getRole()).toBe('Manager')
})