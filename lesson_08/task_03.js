const arrRandom = (length, n, m, str) => {
  const maxNum = Math.floor(Math.max(n, m)),
        minNum = Math.ceil(Math.min(n, m));

  const arr = Array.from({ length }, (_) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  if (str === 'even') {
    return arr.filter(num => num % 2 === 0);
  }
  if (str === 'odd') {
    return arr.filter(num => num % 2 !== 0);
  }
}

console.log(arrRandom(5, 99, 50, 'even'));
console.log(arrRandom(5, 99, 50, 'odd'));
