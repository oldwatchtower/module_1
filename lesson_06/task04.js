const calculate = (total, amount, promo) => {
  let totalPrice = total;
  let totalSale;
  if (amount > 10) {
    totalSale = totalPrice * 0.03;
    console.log(totalSale);
  }
  if (total > 30000) {
    totalSale += totalPrice * 0.15;
    console.log(totalSale);
  }

  if (promo === 'METHED') {
    totalSale += totalPrice * 0.1
    console.log(totalSale);
  }
  return totalPrice - totalSale;
  // if (promo === 'G3H2Z1' && totalPrice > 2000) {
  //   totalSale = totalPrice - 500; 
  // }
}

console.log(calculate(32000, 11, 'METHED'));