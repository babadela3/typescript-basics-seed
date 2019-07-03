let pizzaSize: string = 'small';

function setPizzaSize(pizza : 'small' | 'medium' | 'large') {
    pizzaSize = pizza;
}

setPizzaSize('large');

console.log(pizzaSize);