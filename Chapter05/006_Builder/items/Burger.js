import Wrapper from '../packing/Wrapper';

class Burger extends Item {
    get packing() {
        return new Wrapper();
    }
}

export default Burger;