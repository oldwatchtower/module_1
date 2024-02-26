const minNum = (a, b) => {
  return ((a + b) - Math.abs(a - b)) * 0.5;
}
console.log(minNum(1000, 320));
