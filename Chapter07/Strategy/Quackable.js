const Quackable = (Sup = Object.constructor) => class extends Sup {
    quack() {
        console.log('Quack!');
    }
};

export default Quackable;