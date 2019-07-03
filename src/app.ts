class Size {
    constructor(private size: string) {}

    set availableSize(size:  string) {
        this.size = size;
    }

    get availableSize(): string {
        return this.size;
    }
}

const size = new Size('medium');

console.log(size.availableSize);

size.availableSize = 'small';

console.log(size.availableSize);

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