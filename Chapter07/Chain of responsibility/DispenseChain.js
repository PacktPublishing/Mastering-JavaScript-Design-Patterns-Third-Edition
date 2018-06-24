class DispenseChain {
    setNextChain(chainElement) {
        throw new Error('This method should be overwritten');
    }
    dispense(currency) {
        throw new Error('This method should be overwritten');
    }
}

export default DispenseChain;