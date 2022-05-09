const Intern = require('../lib/Intern');

jest.mock('../lib/Employee');

test('create new intern object', () => {
    const intern = new Intern('Dave');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
})

test("get intern's school", () => {
    const intern = new Intern('Dave');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("get intern's role", () => {
    const intern = new Intern('Dave');

    expect(intern.getRole()).toBe('Intern');
})