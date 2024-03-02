const arrRandom = (length) => {
  return Array.from({ length }, (_) => {
    return Math.floor((Math.random() * 100 + 1));
  })
}
console.log(arrRandom(50));