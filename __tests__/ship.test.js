const Ship = require('../src/ship.js');
const ship = new Ship('Leeds');

describe('Ship', () => {
    test('creating the ship', () => {

        expect(new Ship()).toBeInstanceOf(Object);
    });

    test('has a starting port', () => {
        const ship = new Ship('Leeds');

        expect(ship.startingPort).toEqual('Leeds');
    });

    test('set sail', () => {
        const ship = new Ship('Leeds');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    })
});
