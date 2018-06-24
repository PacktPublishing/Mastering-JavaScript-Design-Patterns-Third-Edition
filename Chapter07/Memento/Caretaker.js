const privateHistory = new WeakMap();
class Caretaker {
    constructor() {
        privateHistory.set(this, []);
    }
    get history() {
        return privateHistory.get(this);
    }
    addToHistory(snapshot) {
        const history = this.history;
        history.push(snapshot);
        privateHistory.set(this, history);
    }
    undo() {
        const snapshot = this.history.pop();
        if (snapshot) {
            console.log(snapshot.originator.state);
            snapshot.restore();
        }
    }
}

export default Caretaker;