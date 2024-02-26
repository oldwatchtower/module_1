const currencyConversion = euro => {
  const rub = euro * (64 * 1.2);
  return rub;
}

console.log(currencyConversion(50));