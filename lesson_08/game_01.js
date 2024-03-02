const gameBot = () => {
  const randomNum = Math.floor((Math.random() * 100 + 1));
  let userNum;
  console.log(randomNum);

  while (true) {
    userNum = prompt('Введите число от 1 до 100');
    if (userNum === null) {
      break;
    }
    if (isNaN(userNum)) {
      alert('Введите число');
    } else if (userNum > randomNum) {
      alert('Меньше!');
    } else if (userNum < randomNum) {
      alert('Больше!');
    } else if (userNum == randomNum) {
      alert('Правильно!');
      break;
    }
  }
}

gameBot();