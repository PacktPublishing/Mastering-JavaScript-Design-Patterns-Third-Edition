import CyprusBankBranch from './CyprusBankBranch';

const cyprusBankBranch0128 = new CyprusBankBranch('0128');

cyprusBankBranch0128.accounts; // []

cyprusBankBranch0128.generateAccount(); // undefined[{…}]

cyprusBankBranch0128.accounts
/**
 * [{ 
 * accountId: "0000000000000000", 
 * ibanFormatted: "CY95 0020 0128 0000 0000 0000 0000"
 * .}]
 */