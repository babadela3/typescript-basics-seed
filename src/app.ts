const pizzaCost: number = 10;
const toppingCost: number = 4;

function totalCost(pizza: number, topping: number): number {
    return pizza + 2 * topping;
}

const cost: number = totalCost(15, toppingCost);

console.log('Cost: ' + cost);

