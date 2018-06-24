import Command from './Command';

class Line extends Command {
    constructor(startX=0, startY=0, endX=0, endY=0) {
        super({
            startX,
            startY,
            endX,
            endY
        });
    }
    setStartPoint(x, y) {
        const state = this.state;
        state.startX = x;
        state.startY = y;
        this.state = state;
    }
    setEndPoint(x, y) {
        const state = this.state;
        state.endX = x;
        state.endY = y;
        this.state = state;
    }
}

export default Line;