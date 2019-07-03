abstract class Size {
    constructor(protected size: string) {}

    set availableSize(size:  string) {
        this.size = size;
    }

    get availableSize(): string {
        return this.size;
    }
}

class Pizza extends Size{
    readonly name: string;
    toppings: string[] = [];

    constructor(name: string, size: string) {
        super(size);
        this.name = name;
    }

    public updateSize(size: string): void {
        this.size = size;
    }

    addTopping(topping: string)  {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza("Pepporoni", "small");
pizza.addTopping("Bacon");
pizza.addTopping("Cheese");
pizza.updateSize("big");

console.log(pizza);
console.log(pizza.name);
console.log(pizza.availableSize);
