const Port = require('../src/port.js');

describe('Port', () => {
    test('creating a port', () => {

        expect(new Port()).toBeInstanceOf(Object);
    })

    test('find the name of a port', () => {

        leedsPort = new Port('Leeds');

        expect(leedsPort.name).toEqual('Leeds');
    })
})