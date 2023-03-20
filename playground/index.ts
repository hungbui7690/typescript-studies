/*
  Introducing Enums P2
  
*/

// hover
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.PENDING

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)
