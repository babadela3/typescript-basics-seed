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

class Pizza extends Size{
    readonly name: string;
    toppings: string[] = [];

    constructor(name: string, size: string) {
        super(size);
        this.name = name;
    }

    addTopping(topping: string)  {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza("Pepporoni", "small");
pizza.addTopping("Bacon");
pizza.addTopping("Cheese");

console.log(pizza);
console.log(pizza.name);
console.log(pizza.availableSize);