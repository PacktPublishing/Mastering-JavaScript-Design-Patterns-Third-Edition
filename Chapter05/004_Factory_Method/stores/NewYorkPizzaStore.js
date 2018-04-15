import PizzaStore from '../PizzaStore';
import CheesePizza from '../pizzas/CheesePizza';
import ClamPizza from '../pizzas/ClamPizza';

const PIZZAS = {
  cheese: CheesePizza,
  clam: ClamPizza
};

class NewYorkPizzaStore extends PizzaStore {
  createPizza(type) {
    let PizzaConstructor = PIZZAS[type];
    let pizza = null;
    if (PizzaConstructor) {
      pizza = new PizzaConstructor();
    }
    return pizza;
  }
}

export default NewYorkPizzaStore;