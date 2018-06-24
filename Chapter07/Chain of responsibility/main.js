import Currency from './Currency';
import ATM from './ATM';

const atm = new ATM();

atm.dispense(new Currency(160, '€'));