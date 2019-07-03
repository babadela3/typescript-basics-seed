interface Pizza {
    name: string,
    toppings: string[]
}

function createPizza(pizzaName: string, pizzaToppings: string[]): Pizza {
    return {
        name : pizzaName,
        toppings : pizzaToppings
    }
}

const pizza = createPizza("Pizza name", ["Topping 1", "Topping 2"]);

console.log(pizza);