import Visitor from './Visitor';

class PostageVisitor extends Visitor {
    constructor(totalPostageForCart=0) {
        super();
        this.totalPostageForCart = totalPostageForCart;
    }
    visit(item) {
        if(item.price <= 10) {
            this.totalPostageForCart += item.weight * 2;
        }
    }
    get totalPostage() {
        return this.totalPostageForCart;
    }
}

export default PostageVisitor;