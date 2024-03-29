const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Kow',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Kowdy',
            room: 'React Course'
        }, {
            id: '3',
            name: 'KowKow',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Kow',
            room: 'Stranger Things Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Kow', 'KowKow']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Kowdy']);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user with invalid id', () => {
        var userId = '10';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '1';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user with invalid id', () => {
        var userId = '10';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();

    });
});
