import BoxUp from '../packing/BoxUp';

class SideDishes extends Item {
    get packing() {
        return new BoxUp();
    }
}

export default SideDishes;