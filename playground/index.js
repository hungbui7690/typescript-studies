/*
  Interface Method Parameters
  
*/
var shoes = {
    name: 'Blue Suede Shoes',
    price: 100,
    // use here
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
