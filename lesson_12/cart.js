'use strict';
const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  discount: 0,
  add(name, price, amount) {
    const item = {
      name,
      price,
      amount,
    };
    this.items.push(item);
    this.count += amount;
  },
  increaseCount(num) {
    return this.count += num;
  },
  calculateItemPrice() {
    let ttlPrice = this.items.reduce((acc, item) => acc + item.price * item.amount, 0);
    ttlPrice -= ttlPrice * (this.discount / 100)
    return ttlPrice;
  },
  clear() {
    this.items = [],
    this.count = 0;
    return cart;
  },
  print() {
    console.log(JSON.stringify(this.items));
    return `Общая стоимость корзины ${this.totalPrice}`;
  },
  set Discount (promocode) {
    if (promocode === 'METHED') {
      return this.discount = 15;
    }
    else if (promocode === 'NEWYEAR') {
      return this.discount = 21;
    };
  },
};

cart.add('phone', '35000', 3);
cart.add('subwoofer', '50000', 2);
cart.add('computer', '130000', 1);
cart.Discount = 'NEWYEAR';
console.log(cart.discount);
console.log(cart.totalPrice);
console.log(cart.print());