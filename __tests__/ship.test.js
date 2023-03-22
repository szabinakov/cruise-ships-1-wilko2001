const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');
const Ship = require('../src/ship.js');



describe('Ship', () => {
    describe('with ports and an itinerary', () => {
        let santaCruize;
        let leedsPort;
        let greecePort;
        let itinerary;

        beforeEach(() => {
            leedsPort = new Port('Leeds');
            greecePort = new Port('Greece');
            itinerary = new Itinerary([leedsPort, greecePort]);
            santaCruize = new Ship(itinerary);
        });


        test('creating the ship', () => {

            expect(santaCruize).toBeInstanceOf(Object);
        });

        test('has a starting port', () => {

            expect(santaCruize.currentPort).toEqual(leedsPort);
        });

        test('set sail', () => {

            santaCruize.setSail();

            expect(santaCruize.currentPort).toBeFalsy();
            expect(leedsPort.ships).not.toContain(santaCruize);
        })

        test('ship can dock to a different port', () => {

            santaCruize.setSail();

            santaCruize.dock(greecePort);


            expect(santaCruize.currentPort).toEqual(greecePort);
            expect(greecePort.ships).toContain(santaCruize);

        })

        test('gets added to port on instantiation', () => {

            expect(leedsPort.ships).toContain(santaCruize);
        });

        test('cannot sail further than itinerary', () => {

            santaCruize.setSail();
            santaCruize.dock();

            expect(() => santaCruize.setSail()).toThrowError('This is the end of your journey!');
        });
    });
});
