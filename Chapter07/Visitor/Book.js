import Visitable from './Visitable';

const privateBookPrice= new WeakMap();
const privateBookWeight= new WeakMap();

class Book extends Visitable {
    constructor(price=0, weight=0) {
        super();
        privateBookPrice.set(this, price);
        privateBookWeight.set(this, weight);
    }
    get price() {
        return privateBookPrice.get(this);
    }
    get weight() {
        return privateBookWeight.get(this);
    }
    accept(visitor) {
        visitor.visit(this);
    }
}

export default Book;