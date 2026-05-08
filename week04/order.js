function calculateTotal(price, quantity) {
  if (price < 0 || quantity < 0) {
    throw new Error("Invalid input");
  }
  return price * quantity;
}

function applyDiscount(total) {
  const discount = 20;

  if (total > 100) {
    return total - discount;
  }
  return total;
}

function processOrder(price, quantity) {
  const total = calculateTotal(price, quantity);
  const finalTotal = applyDiscount(total);
  return finalTotal.toFixed(2);
}

module.exports = {
  calculateTotal,
  applyDiscount,
  processOrder
};


