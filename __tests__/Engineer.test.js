const Engineer = require('../lib/Engineer');

jest.mock('../lib/Employee.js')

test('create new Engineer object', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
})

test('get Engineer Role', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.getRole()).toBe('Engineer');
})

test("get engineer's github", () => {
    const engineer = new Engineer('Dave');

    expect(engineer.getGithub()).toEqual(expect.any(String))
})