let setTotalPrice : (price: number, quantity?: number) => number;

setTotalPrice = (x,y) => {
    if(y) {
        return x * y;
    }
    else {
        return x;
    }
};

const sum = setTotalPrice(21);

console.log(sum);