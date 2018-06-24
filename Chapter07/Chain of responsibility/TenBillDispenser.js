import DispenseChain from './DispenseChain';

class TenBillDispenser extends DispenseChain {
    setNextChain(chainElement) {
        this.chain = chainElement;
    }
    dispense(currency) {
        const amount = currency.amount;
        if(amount >= 10) {
            const billsQuantity = Math.floor(amount / 10);
            const remainder = amount % 10;
            console.log('Dispensing ' + billsQuantity + ' note' + (billsQuantity > 1 ? 's' : '') + ' of 10' + currency.sign + '.'); 
            if(remainder > 0) {
                this.chain.dispense(new Currency(remainder, currency.sign));
            }
        } else {
            this.chain.dispense(currency);
        }
    }
}

export default TenBillDispenser;