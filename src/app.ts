class Pizza {
    readonly name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string)  {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza("Pepporoni");
pizza.addTopping("Bacon");
pizza.addTopping("Cheese");

console.log(pizza);
console.log(pizza.name);