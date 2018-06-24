import DispenseChain from './DispenseChain';

class TwentyBillDispenser extends DispenseChain {
    setNextChain(chainElement) {
        this.chain = chainElement;
    }
    dispense(currency) {
        const amount = currency.amount;
        if(amount >= 20) {
            const billsQuantity = Math.floor(amount / 20);
            const remainder = amount % 20;
            console.log('Dispensing ' + billsQuantity + ' note' + (billsQuantity > 1 ? 's' : '') + ' of 20' + currency.sign + '.'); 
            if(remainder > 0) {
                this.chain.dispense(new Currency(remainder, currency.sign));
            }
        } else {
            this.chain.dispense(currency);
        }
    }
}

export default TwentyBillDispenser;