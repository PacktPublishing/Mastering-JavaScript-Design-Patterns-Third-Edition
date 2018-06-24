const Displayable = (Sup=Object.constructor) => class extends Sup {
    display() {
        throw new Error('This method must be overwritten');
    }
};

export default Displayable;