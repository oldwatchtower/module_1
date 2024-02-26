/* Задача 1 */
let taxSum1 = 0;
const salary1 = prompt('Какой у вас уровень дохода?');

if (salary1 < 15000) {
  taxSum1 = salary1 * 0.13;
  console.log(`Сумма налога составит ${taxSum1}`);
} else if (salary1 < 50000) {
  taxSum1 = salary1 * 0.2;
  console.log(`Сумма налога составит ${taxSum1}`);
} else {
  taxSum1 = salary1 * 0.3;
  console.log(`Сумма налога составит ${taxSum1}`);
}


/* Задача 2 */

let taxSum2 = 0;
const salary2 = prompt('Какой у вас уровень дохода?');

if (salary2 < 15000) {
  taxSum2 = salary2 * 0.13;
  console.log(`Сумма налога составит ${taxSum2}`);
} else if (salary2 < 50000) {
  taxSum2 = (salary2 - 15000) * 0.2;
  console.log(`Сумма налога составит ${taxSum2}`);
} else {
  taxSum2 = (salary2 - 50000) * 0.3;
  console.log(`Сумма налога составит ${taxSum2}`);
}