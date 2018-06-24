import Caretaker from './Caretaker';

class LineEditor extends Caretaker {
    constructor() {
        super();
        this.line = null;
    }
    onMouseDown(event) {
        this.line = new Line();
        this.line.setStartPoint(event.clientX, event.clientY);
    }
    onMouseUp(event) {
        this.line.setEndPoint(event.clientX, event.clientY);
        this.addToHistory(this.line.save());
    }
}

export default LineEditor;