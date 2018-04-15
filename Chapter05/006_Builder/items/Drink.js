import Bottle from '../packing/Bottle';

class Drink extends Item {
    get packing() {
        return new Bottle();
    }
}

export default Drink;