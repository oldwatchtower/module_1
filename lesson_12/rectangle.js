const rectangle = {
  _width: 5,
  _height: 5,

  set width(num) {
    if (isNaN(num)) {
      console.log('Введите число');
    }
    this._width = num;
  }, 
  set height(num) {
    if (isNaN(num)) {
      console.log('Введите число');
    }
    this._height = num;
  },

  get perimeter() {
    return `${2 * (this._height + this._width)} см`;
  },
  get area() {
    return `${this._width * this._height} см`
  }
};


console.log(rectangle.perimeter);
console.log(rectangle.area);