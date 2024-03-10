const recursion = (arr) => {
  const randomNum = Math.floor((Math.random() * 10) + 1);
  console.log(randomNum);
  arr.push(randomNum);
  let arrSum = arr.reduce((acc, num) => acc + num, 0)
  if (arrSum < 50) {
    return recursion(arr);
  } else if (arrSum >= 50) {
    return arr; 
  }
};

console.log(recursion([]));