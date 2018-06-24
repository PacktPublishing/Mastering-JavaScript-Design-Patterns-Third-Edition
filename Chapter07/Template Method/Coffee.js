import Confirm from 'prompt-confirm';
import CaffeineBeverage from './CaffeineBeverage';

class Coffee extends CaffeineBeverage {
    brew() {
        console.log("Dripping Coffee through filter!");
    }
    addCondiments() {
        console.log("Add Sugar and Milk!");
    }
    customerWantsCondiments() {
        const prompt = new Confirm('Do you want sugar and milk?');
        return prompt.run();
    }
}

export default Coffee;