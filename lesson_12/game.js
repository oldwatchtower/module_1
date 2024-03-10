const gameBot = () => {
  const randomNum = Math.floor((Math.random() * 100) + 1);
  console.log(randomNum);

  const start = () => {
    let userNum = prompt('Введите число от 1 до 100');

    if (userNum === null) {
      return;
    }
    if (isNaN(userNum)) {
      alert('Введите число');
      start();
    } else if (userNum > randomNum) {
      alert('Меньше!');
      start();
    } else if (userNum < randomNum) {
      alert('Больше!');
      start();
    } else if (userNum == randomNum) {
      alert('Правильно!');
    }
  };
  start();
};

gameBot();
