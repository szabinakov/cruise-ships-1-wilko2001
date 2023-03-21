const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');
const Ship = require('../src/ship.js');



describe('Ship', () => {
    test('creating the ship', () => {
        const leedsPort = new Port('Leeds');
        const itinerary = new Itinerary([leedsPort]);
        const santaCruize = new Ship(itinerary);        

        expect(santaCruize).toBeInstanceOf(Object);
    });

    test('has a starting port', () => {

        const leedsPort = new Port('Leeds');
        const itinerary = new Itinerary([leedsPort]);
        const santaCruize = new Ship(itinerary);
        
        expect(santaCruize.currentPort).toEqual(leedsPort);
    });

    test('set sail', () => {
        const leedsPort = new Port('Leeds');
        const greecePort = new Port('Greeece');
        const itinerary = new Itinerary([leedsPort, greecePort]);
        const santaCruize = new Ship(itinerary);


        santaCruize.setSail();

        expect(santaCruize.currentPort).toBeFalsy();
    })

    test('ship can dock to a different port', () => {
        const leedsPort = new Port('Leeds');
        const greecePort = new Port('Greece');
        const itinerary = new Itinerary([leedsPort, greecePort]);
        const santaCruize = new Ship(itinerary);
        santaCruize.setSail();
        santaCruize.dock(greecePort);

        
        expect(santaCruize.currentPort).toEqual(greecePort);
    })

    test('cannot sail further than itinerary', () => {
        const leedsPort = new Port('Leeds');
        const greecePort = new Port('Greece');
        const itinerary = new Itinerary([leedsPort, greecePort]);
        const santaCruize = new Ship(itinerary);

        santaCruize.setSail();
        santaCruize.dock();

        expect(() => santaCruize.setSail()).toThrowError('This is the end of your journey!');
    })
});
