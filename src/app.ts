class Coupon {
    static nameArray = ['Coupon 25','Coupon 30'];
    static create(pertenge: number) {
        console.log(pertenge);
    }
}

console.log(Coupon.nameArray);
console.log(Coupon.create(15));