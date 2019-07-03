interface Pizza {
    name: string,
    toppings: string[],
    getName() : string
}

function createPizza(pizzaName: string, pizzaToppings: string[]): Pizza {
    return {
        name : pizzaName,
        toppings : pizzaToppings,
        getName() : string{
            return this.name
        }
    }
}

const pizza = createPizza("Pizza name", ["Topping 1", "Topping 2"]);

console.log(pizza);