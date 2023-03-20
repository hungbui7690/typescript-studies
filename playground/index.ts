/*
  Enums Behind The Scenes
  - check js file after compiled

*/

// try to add const and remove "const" before "enum" > then check JS file to see the JS code
enum OrderStatus {
  PENDING = 10,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
  ERROR = 234,
}

// (***)
const order = {
  orderNumber: 345322,
  status: OrderStatus.PENDING,
}
