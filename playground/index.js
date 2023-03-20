/*
  Type Narrowing w Union Types P3
  
*/
function calcTax(price, tax) {
    // type narrowing
    if (typeof price === 'string')
        price = Number(price.replace('$', ''));
    return price * tax;
}
var tax1 = calcTax(45.6, 0.2);
var tax2 = calcTax('$45.60', 0.2);
console.log(tax1, tax2);
