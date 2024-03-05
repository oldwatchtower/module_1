const leapYear = (n, m) => {
  const result = [];
  for (let i = n; i <= m; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      result.push(i);
    } 
  }
  return result;
}

console.log(leapYear(1980, 2034));