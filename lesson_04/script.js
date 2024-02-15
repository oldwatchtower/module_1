'use strict'

{
  const productName = 'Banana',
      productCategory = 'Fruit';

let productAmount = 20,
    productPrice = 70;

console.log(productName);

console.log(productAmount * productPrice);
}

{
  const item = 'phone',
        category = 'technique';
  
  let count = 10,
      price = '15000';
}

{
  const resultProduct = prompt('Наименование товара'),
        resultCount = +prompt('Количество товара'),
        resultCategory = prompt('Категория товара'),
        resultPrice = +prompt('Цена товара');
  
  console.log(typeof resultProduct);
  console.log(typeof resultCount);
  console.log(typeof resultCategory);
  console.log(typeof resultPrice);

  console.log(`На складе ${resultCount} единицы товара ${resultProduct} на сумму ${resultCount * resultPrice}`);
}