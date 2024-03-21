'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const result = {
    user: 0,
    comp: 0,
  };

  const game = () => {
    const getCompChoice = () => {
      const random = Math.floor(Math.random() * FIGURES_RUS.length);
      return FIGURES_RUS[random];
    }
    
    const getUserChoice = () => {
      let userChoice = prompt('Камень, ножницы, бумага?');
      if (userChoice === null && confirm('Вы уверены?')) {
        alert(`Ваш счет: ${result.user}, счет компьютера ${result.comp}`)
        return null;
      }
      else if (userChoice !== null && !FIGURES_RUS.includes(userChoice)) {
        alert('Введите один из предложенных вариантов');
        return (getUserChoice());
      } 
      return userChoice.toLowerCase();
    }
    
    const compareChoices = (userChoice, compChoice) => {
      if (userChoice === compChoice) {
        return 'Ничья';
      } else if (
        (userChoice === 'камень' && compChoice === 'ножницы') ||
        (userChoice === 'ножницы' && compChoice === 'бумага') ||
        (userChoice === 'бумага' && compChoice === 'камень')
      ) {
        result.user++;
        return 'Вы выиграли';
      } else {
        result.comp++;
        return 'Выиграл компьютер';
      }
    }
    const start = () => {
      const userChoice = getUserChoice();
      if (userChoice === null) {
        return;
      }
      const compChoice = getCompChoice();
      
      compareChoices(userChoice, compChoice);
      console.log(result);
      return start();
    }
    return start();
  }

  game();
})();