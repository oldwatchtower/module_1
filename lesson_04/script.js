// console.log(5 == '5');

/* console.log('ьнанас' > 'аукварь');
console.log('Ьнанас' > 'аукварь');
console.log('ананас' < 'букварь'); */


{
  const resultProduct = prompt('Наименование товара'),
        resultCount = +prompt('Количество товара'),
        resultCategory = prompt('Категория товара'),
        resultPrice = +prompt('Цена товара');
  
  console.log(typeof resultProduct);
  console.log(typeof resultCategory);
  
  if (Number.isFinite(resultCount)) {
    console.log(typeof resultCount);
  } else {
    console.log('Вы ввели некорректные данные');
  }
  
  if (Number.isFinite(resultPrice)) {
    console.log(typeof resultPrice);
  } else {
    console.log('Вы ввели некорректные данные');
  }

  console.log(`На складе ${resultCount} единицы товара ${resultProduct} на сумму ${resultCount * resultPrice}`);
}