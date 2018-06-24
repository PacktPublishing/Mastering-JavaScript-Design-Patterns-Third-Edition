import FiftyBillDispenser from './FiftyBillDispenser';
import TwentyBillDispenser from './TwentyBillDispenser';
import TenBillDispenser from './TenBillDispenser';

class ATM {
    constructor() {
        const B50 = new FiftyBillDispenser();
        const B20 = new TwentyBillDispenser();
        const B10 = new TenBillDispenser();
        
        B50.setNextChain(B20);
        B20.setNextChain(B10);

        this.chain = B50;
    }
    dispense(currency) {
        if(currency.amount % 10 !== 0) {
            throw new Error('Amount should be multiple of 10.');
        }
        this.chain.dispense(currency);
    }
}

export default ATM;