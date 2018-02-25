class Person {

  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getDescrtiption() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Traveller extends Person {

  constructor(name, age, location) {
    super(name, age);
    this.location = location;
  }

  getDescrtiption() {
    let description = super.getDescrtiption();

    if(this.location) {
      description += ` Home location is ${this.location}.`
    }

    return description;
  }
}

const me = new Person('Adam Nowacki', 1);
const descriptionMe = me.getDescrtiption();

const you = new Person();
const descriptionYou = you.getDescrtiption();

console.log(descriptionMe);
console.log(descriptionYou);

const traveller = new Traveller('Adam Nowacki', 2, 'Polska');
const descriptionTraveller = traveller.getDescrtiption();

console.log(descriptionTraveller);
