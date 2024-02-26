const calculate = (price, amountProd, promo) => {
  let totalPrice = price;
  let sumSale;
  if (amountProd > 10) {
    totalPrice *= 0.97;
    console.log(totalPrice);
  }

  if (totalPrice > 30000) {
    sumSale = (totalPrice - 30000) * 0.15; 
    totalPrice -= sumSale;
    console.log(totalPrice);
  }
  
  if (promo === 'METHED') {
    totalPrice *= 0.9;
    console.log(totalPrice);
  }

  if (promo === 'G3H2Z1' && totalPrice > 2000) {
    totalPrice -= 500;
    console.log(totalPrice);
  }
  return totalPrice.toFixed(2);
}

console.log(calculate(32000, 11, 'METHED'));