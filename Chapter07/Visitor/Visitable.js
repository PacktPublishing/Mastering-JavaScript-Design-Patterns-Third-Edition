class Visitable {
    accept(visitor) {
        throw new Error('This method should be overwritten');
    }
}

export default Visitable;