class Mediator {
    notify(component, eventName) {
        throw new Error('This method should be overwritten');
    }
}

export default Mediator;