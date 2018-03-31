import { getNewAccount } from './bank-utils';
import CyprusBank from './CyprusBank';

class CyprusBankBranch extends CyprusBank {
    constructor(branchIdentifier) {
        super();
        this.branchIdentifier = branchIdentifier;
        this.accounts = [];
    }
    setNewAccount() {
        let newAccount = getNewAccount({
            countryCode: this.countryCode,
            bankIdentifier: this.bankIdentifier,
            branchIdentifier: this.branchIdentifier,
            accountId
        });

        this.accounts.push(newAccount); 
    }
}