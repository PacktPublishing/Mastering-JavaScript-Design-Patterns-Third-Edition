class AirportLane {
    constructor(number) {
        this.number = number;
        this.mediator = null;
        this.occupied = false;
        this.airplane = null;
    }

    addMediator(mediator) {
        this.mediator = mediator;
    }

    setOccupied(airplane) {
        this.airplane = airplane;
        this.occupied = true;
        this.mediator.notify(this, 'laneIsOccupied');
    }

    setFree() {
        this.airplane = null;
        this.occupied = false;
        this.mediator.notify(this, 'laneIsFree');
    }
}

export default AirportLane;