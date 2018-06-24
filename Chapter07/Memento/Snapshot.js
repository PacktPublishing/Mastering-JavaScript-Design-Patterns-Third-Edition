import Memento from './Memento';

const privateStateSnapshot = new WeakMap();
class Snapshot extends Memento{
    constructor(originator, state) {
        super();
        this.originator = originator;
        privateStateSnapshot.set(this, state);
    }
    get state() {
        return privateStateSnapshot.get(this)
    }
    restore() {
        this.originator.state = this.state;
    }
}

export default Snapshot;