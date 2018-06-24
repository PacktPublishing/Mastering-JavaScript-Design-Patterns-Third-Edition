import DispenseChain from './DispenseChain';

class FiftyBillDispenser extends DispenseChain {
    setNextChain(chainElement) {
        this.chain = chainElement;
    }
    dispense(currency) {
        const amount = currency.amount;
        if(amount >= 50) {
            const billsQuantity = Math.floor(amount / 50);
            const remainder = amount % 50;
            console.log('Dispensing ' + billsQuantity + ' note' + (billsQuantity > 1 ? 's' : '') + ' of 50' + currency.sign + '.'); 
            if(remainder > 0) {
                this.chain.dispense(new Currency(remainder, currency.sign));
            }
        } else {
            this.chain.dispense(currency);
        }
    }
}

export default FiftyBillDispenser;