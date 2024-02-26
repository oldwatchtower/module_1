const greatestСommonDivisor = (m, n) => {
  if (m === 0) {
    return n;
  }
  return greatestСommonDivisor(n % m, m);
}

console.log(greatestСommonDivisor(150, 100))