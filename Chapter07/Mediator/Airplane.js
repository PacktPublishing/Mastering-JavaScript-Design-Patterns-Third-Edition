class Airplane {
    constructor(id, airportControlTower) {
        this.id = id;
        this.airportControlTower = airportControlTower;
        this.pendingRequest = '';
    }
    
    askLanding() {
        this.pendingRequest = 'land';
        this.airportControlTower.notify(this, 'askLanding');
    }
    
    askTakeOff() {
        this.pendingRequest = 'takeOff';
        this.airportControlTower.notify(this, 'askTakeOff');
    }
    
    wait(eventName) {
        setTimeout(() => {
            this[eventName]();
        }, 500);
    }
    
    land() {
        this.airportControlTower.notify(this, 'land');
    }
    
    takeOff() {
        this.airportControlTower.notify(this, 'takeOff');
    }
}

export default Airplane;