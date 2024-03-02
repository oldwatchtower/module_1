const arrRandom = (length, n, m) => {
  const maxNum = Math.floor(Math.max(n, m)),
        minNum = Math.ceil(Math.min(n, m));

  return Array.from({ length }, (_) => {
    return Math.floor((Math.random() * (maxNum - minNum + 1)) + minNum);
  })
}

console.log(arrRandom(5, 99, 50));

