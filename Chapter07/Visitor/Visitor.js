class Visitor {
    visit(item) {
        throw new Error('This method should be overwritten');
    }
}

export default Visitor;