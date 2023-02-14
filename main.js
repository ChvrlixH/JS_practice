// class drug {
//   constructor(id, name, price, company) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.company = company;
//   }
// }

// class tea extends drug {
//   constructor(id, name, price, company, type) {
//     super(id, name, price, company);
//     this.type = type;
//   }
// }

class Car {
  constructor(model, marka, isNew, color, year, milage) {
    this.model = model;
    this.marka = marka;
    this.isNew = isNew;
    this.color = color;
    this.year = year;
    this.milage = milage;
  }
}
class Car2 extends Car {
  constructor(model, marka, isNew, color, year, milage, twohand) {
    super(model, marka, isNew, color, year, milage);
    this.twohand = twohand;
  }
}

let hyundai = new Car2("Sonata", "BMW", true, "Blue", 1987, 145.613, true);
console.log(hyundai);
function Moto(model, marka, isNew, color, year, milage) {
  this.model = model;
  this.marka = marka;
  this.isNew = isNew;
  this.color = color;
  this.year = year;
  this.milage = milage;
}

Moto.prototype.twohand = true;
Moto.prototype.Sale = function () {
  return this.color;
};
