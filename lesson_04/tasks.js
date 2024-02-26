/* Задача два */
const rain = Math.round(Math.random());
console.log(rain);

if (rain === 1) {
  console.log('Пошел дождь. Возьмите зонт!');
} else if (rain === 0) {
  console.log('Дождя нет!');
}


/* Задача три */

const mathScores = +prompt('Введите кол-во баллов по математике'),
      langScores = +prompt('Введите кол-во баллов по русскому языку'),
      informScores = +prompt('Введите кол-во баллов по информатике');

const totalScores = mathScores + langScores + informScores;

if (totalScores >= 265) {
  console.log('Поздравляю, вы поступили на бюджет!')
}


/* Задача четыре */

const howMuchMoneyDoYouNeed = prompt('Сколько денег вы хотите снять?');

if (howMuchMoneyDoYouNeed % 100 === 0) {
  console.log('Идет выдача денег');
} else {
  console.log('Введите сумму, кратную 100 рублям');
}
