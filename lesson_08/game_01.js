const gameBot = () => {
  const randomNum = Math.floor((Math.random() * 100 + 1));
  let userNum;
  console.log(randomNum);

  const recurs = () => {
    userNum = prompt('Введите число от 1 до 100');
    if (userNum < 1 || userNum > 100) {
      return alert('Введи число в пределах от 1 до 100')
    } else if (isNaN(userNum)) {
      
    }
  };
}

gameBot();