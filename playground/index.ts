/*
  A Bit More On Enums
  
*/

// now SHIPPED = 11, DELIVERED = 12, RETURNED = 13
enum OrderStatus {
  PENDING = 10, // (***)
  SHIPPED,
  DELIVERED,
  RETURNED,
}

enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
  ERROR = 234, // can have multiple types of value
}

let move = ArrowKeys.LEFT
