import LunchMenu from './LunchMenu';
import Iterator from './Iterator';

class Mattress {
    constructor() {
        this.lunchItems = new LunchMenu().getMenuItems();
    }

    printMenu() {
        const iterator = new Iterator(this.lunchItems);
        let item = iterator.next();
        let value;
        while (!item.done) {
            value = item.value;
            console.log(value.getName() + ': ' + value.getDescription() + ', ' + value.getPrice() + 'eur.');
            item = iterator.next();
        }
    }
}

export default Mattress;