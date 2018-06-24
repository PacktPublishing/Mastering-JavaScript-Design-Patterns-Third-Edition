const Flyable = (Sup = Object.constructor) => class extends Sup {
    fly() {
        console.log('Wings!');
    }
};

export default Flyable;