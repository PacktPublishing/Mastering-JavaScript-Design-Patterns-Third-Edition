import Mediator from './Mediator';

class AirportControlTower extends Mediator {
    constructor(lanes = [], flights = {}) {
        super();
        this.lanes = lanes;
        this.flights = flights;
    }

    addLane(lane) {
        lane.mediator = this;
        this.lanes.push(lane);
    }

    getFreeLane() {
        let freeLane;
        this.lanes.some((lane) => {
            var isFree = lane.occupied === false;
            if (isFree) {
                freeLane = lane;
            }
        });
        return freeLane;
    }

    notify(component, eventName) {
        if (eventName === 'laneIsOccupied') {
            console.log('Lane ' + component.number + ' is occupied by ' + component.airplane.id + '.');
            component.airplane[component.airplane.pendingRequest]();
            component.setFree();
        } else if (eventName === 'laneIsFree') {
            console.log('Lane ' + component.number + ' is free.');
        } else if (eventName === 'askLanding' || eventName === 'askTakeOff') {
            if (!this.flights[component.id]) {
                this.flights[component.id] = component;
            }
            const freeLane = this.getFreeLane();
            if (freeLane) {
                freeLane.setOccupied(component);
            } else {
                setTimeout(() => {
                    this.notify(component, eventName);
                }, 500);
            }
        } else if (eventName === 'land') {
            console.log('Airplane ' + component.id + ' just landed');
        } else if (eventName === 'takeOff') {
            console.log('Airplane ' + component.id + ' just took off');
        }
    }
}

export default AirportControlTower;