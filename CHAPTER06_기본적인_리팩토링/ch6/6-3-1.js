export function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const discount = order.quantity * order.itemPrice;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - discount + shipping;
}