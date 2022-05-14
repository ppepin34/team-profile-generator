const Engineer = require('../lib/Engineer');

test('create new Engineer object', () => {

    var name = 'Dave';
    var id = 123;
    var email = 'this@gmail.com';
    var github = 'dave123';

    const engineer = new Engineer(name, id, email, github);

    expect(engineer.github).toBe('dave123');
    expect(engineer.name).toBe('Dave');
    expect(engineer.role).toBe('Engineer');
})

test('get Engineer Role', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.getRole()).toBe('Engineer');
})

test("get engineer's github", () => {

    var github = 'dave123';
    const engineer = new Engineer('Dave', 1, 'email', github);

    expect(engineer.getGithub()).toBe('dave123')
})