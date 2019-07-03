let setTotalPrice : (price: number, quantity: number) => number;

setTotalPrice = (x,y) => x * y;

const sum = setTotalPrice(25, 6);

console.log(sum);