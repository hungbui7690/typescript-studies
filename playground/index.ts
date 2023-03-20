/*
  Type Narrowing w Union Types P2
  
*/

// 45.60 or $45.60
function calcTax(price: number | string, tax: number) {
  return price * tax // because price can be string > ts complains
}
