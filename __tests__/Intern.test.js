const Intern = require('../lib/Intern');

test('create new intern object', () => {
    let name = 'Dave';
    let id = 1;
    let email = 'dave@gmail.com';
    let school = 'vcu';

    const intern = new Intern(name, id, email, school);

    expect(intern.school).toBe('vcu');
    expect(intern.role).toBe('Intern');
})

test("get intern's school", () => {
    let school = 'vcu'
    const intern = new Intern('Dave', '1', 'this', school);

    expect(intern.getSchool()).toBe('vcu');
})

test("get intern's role", () => {
    const intern = new Intern('Dave');

    expect(intern.getRole()).toBe('Intern');
})