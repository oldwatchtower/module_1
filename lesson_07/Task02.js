const getAverageValue = (sum) => {
  const totalSum = sum.reduce((a, b) => {
    return (a + b)
  }); 
  return Math.floor(totalSum / sum.length);
}
const allСashbox = [4500, 3210, 650, 1250, 990, 13900, 370];

console.log(getAverageValue(allСashbox));