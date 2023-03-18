const Port = require('../src/port.js');
const leedsPort = new Port('Leeds');
const Ship = require('../src/ship.js');
const santaCruize = new Ship(leedsPort);



describe('Ship', () => {
    test('creating the ship', () => {

        expect(new Ship()).toBeInstanceOf(Object);
    });

    test('has a starting port', () => {

        expect(santaCruize.currentPort).toEqual(leedsPort);
    });

    test('set sail', () => {
        const port = new Port('Leeds');
        const ship = new Ship('Port');

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    })

    test('ship can dock to a different port', () => {
        const greecePort = new Port('Greece');

        santaCruize.dock(greecePort);
        
        expect(santaCruize.currentPort).toEqual(greecePort);
    })
});
