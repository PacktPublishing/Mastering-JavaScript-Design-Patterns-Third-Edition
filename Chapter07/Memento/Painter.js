import Caretaker from './Caretaker';

class Painter extends Caretaker{
    constructor(commands) {
        super();
        this.commands = commands;
    }
}

export default Painter;