let pizza : {name : string, price : number, getName() : string} = {
    name : "Pepperoni",
    price : 33,
    getName() {
        return pizza.name;
    }
}

console.log(pizza.getName());