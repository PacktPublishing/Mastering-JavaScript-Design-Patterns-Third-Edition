import PostageVisitor from './PostageVisitor';

const privateCartItems = new WeakMap();

class ShoppingCart {
    constructor() {
        privateCartItems.set(this, []);
    }
    get items() {
        return privateCartItems.get(this);
    }
    addItem(item) {
       const items = this.items;
       items.push(item);
       privateCartItems.set(this, items);
    }
    calculateTotalPrice() {
        const amountCart = this.calculateAmountCart();
        const amountPostage = this.calculatePostage();
        return amountCart + amountPostage;
    }
    calculateAmountCart() {
        return this.items.reduce((reducer, item) => {
            return (reducer += item.price);
        }, 0);
    }
    calculatePostage() {
        const visitor = new PostageVisitor();
        this.items.forEach((item) => {
            item.accept(visitor);
        });
        return visitor.totalPostage;
    }
}

export default ShoppingCart;