/*
  Enums Behind The Scenes
  - check js file after compiled

*/
// try to change between enum to const and backward > then check JS file to see the JS code
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 10] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 11] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 12] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 13] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
    ArrowKeys[ArrowKeys["ERROR"] = 234] = "ERROR";
})(ArrowKeys || (ArrowKeys = {}));
// (***)
var order = {
    orderNumber: 345322,
    status: OrderStatus.PENDING
};
