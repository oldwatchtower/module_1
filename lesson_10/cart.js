const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  add(name, price, amount) {
    let item = {
      name,
      price,
      amount
    };
    this.items.push(item);
    this.totalPrice += price * amount;
    this.count += amount;
  },
  increaseCount(num) {
    return this.count += num;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0)
  },
  clear() {
    this.items = [],
    this.totalPrice = 0,
    this.count = 0
    return cart;
  },
  print() {
    console.log(JSON.stringify(this.items))
    return `Общая стоимость корзины ${this.totalPrice}`;
  }
}

cart.add('phone', '35000', 3);
cart.add('subwoofer', '50000', 2);
cart.add('computer', '130000', 1);
console.log(cart.totalPrice)
console.log(cart.print());
