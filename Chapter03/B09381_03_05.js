import getChange from './change';

const _drawer = new WeakMap();
class CashRegister {
  constructor() {
    _drawer.set(this, [500, 200, 100, 50, 20, 10, 5, 2, 1]);
  }
  get drawer() {
    return _drawer.get(this);
  }
  makeChange(bill, tendered) {
    return getChange(tendered - bill, this.drawer);
  }
}