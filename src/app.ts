type Pizza = {name : string, price : number};

const pizza : Pizza = {name : "Pepperoni", price : 3};

const serializable = JSON.stringify(pizza);

function getNameFromJson(json : string): string {
    return (JSON.parse(json) as Pizza).name;
}

console.log(getNameFromJson(serializable));