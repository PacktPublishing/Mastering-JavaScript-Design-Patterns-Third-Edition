import Confirm from 'prompt-confirm';
import CaffeineBeverage from './CaffeineBeverage';

class Tea extends CaffeineBeverage {
    brew() {
        console.log("Steeping the tea!");
    }
    addCondiments() {
        console.log("Adding lemon!");
    }
    customerWantsCondiments() {
        const prompt = new Confirm('Do you want some lemon?');
        return prompt.run();
    }
}

export default Tea;