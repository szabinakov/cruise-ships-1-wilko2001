class Port {
    constructor(Port) {
        this.name = Port;
        this.ships = [];
    }
addShip(Ship) {
    this.ships.push(Ship);
        
}

removeShip(Ship) {
    const index = this.ships.indexOf(Ship);
    this.ships.splice(index, 1);
    
}        

}

module.exports = Port;