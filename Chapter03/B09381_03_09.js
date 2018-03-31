import CyprusBank from './CyprusBank';

class CyprusBankBranch extends CyprusBank {
  constructor(branchIdentifier) {
    super();
    this.branchIdentifier = branchIdentifier;
    this.accounts = [];
  }
  generateAccount() {
    let accountId;
    this.accounts.length > 0 ? 
      accountId = this.accounts[this.accounts.length - 1].accountId + 1 :
      accountId = '0000000000000000';
    let ibanFormatted = (this.countryCode + Math.floor(Math.random() * 100) + 
                         this.bankIdentifier + this.branchIdentifier + 
                         accountId).match(/.{1,4}/g).join(' ');
    this.accounts.push({ accountId, ibanFormatted }); 
  }
}