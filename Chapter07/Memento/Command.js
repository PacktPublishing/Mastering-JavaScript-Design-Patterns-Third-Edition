import Originator from './Originator';

const privateStateCommand = new WeakMap();
class Command extends Originator{
    constructor(state) {
        super();
        privateStateCommand.set(this, state);
    }
    get state() {
        return privateStateCommand.get(this);
    }
    set state(state) {
        privateStateCommand.set(this, state);
    }
    save() {
        return new Snapshot(this, this.state);
    }
}

export default Command;