import PizzaStore from '../../../common/PizzaStore';
import NewYorkPizzaIngredientFactory from '../ingredientFactory/NewYorkPizzaIngredientFactory';
import CheesePizza from '../pizzas/CheesePizza';
import ClamPizza from '../pizzas/ClamPizza';

const PIZZAS = {
  cheese: CheesePizza,
  clam: ClamPizza
};

class NewYorkPizzaStore extends PizzaStore {
  createPizza(type) {
    let ingredientFactory = new NewYorkPizzaIngredientFactory();
    let PizzaConstructor = PIZZAS[type];
    let pizza = null;
    if (PizzaConstructor) {
      pizza = new PizzaConstructor('New York Style', ingredientFactory);
    }
    return pizza;
  }
}

export default NewYorkPizzaStore;