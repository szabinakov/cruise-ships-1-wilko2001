class Ship {
    constructor(initialPort) {
        this.currentPort = initialPort;
    };

    setSail() {
        this.currentPort = undefined;
    }

    dock(newPort) {
        this.currentPort = newPort;
    }
}


module.exports = Ship;