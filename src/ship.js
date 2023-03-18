class Ship {
    constructor(startingPort) {
        this.startingPort = startingPort;
    };

    setSail() {
        this.startingPort = undefined;
    }
};

module.exports = Ship;