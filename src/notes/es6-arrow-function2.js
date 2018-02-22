const calc = {
  numbers: [5, 8, 10],
  multipliBy: 4,
  multiply() {
    return this.numbers.map((number) => number * this.multipliBy);
  }
};

console.log(calc.multiply());
