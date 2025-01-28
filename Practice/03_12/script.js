/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Laptop {
  constructor(model, brand, price, screenSize, processor, memory, isLidOpen) {
    this.model = model;
    this.brand = brand;
    this.price = price;
    this.screenSize = screenSize;
    this.processor = processor;
    this.memory = memory;
    this.isLidOpen = isLidOpen;
  }
  toggleLid() {
    this.isLidOpen = !this.isLidOpen;
  }
}

const acer = new Laptop(
  "Aspire 5",
  "Acer",
  450,
  "15.6 inches",
  "Intel Core i5-1035G1",
  "8GB DDR4",
  false
);

console.log(acer.isLidOpen);
console.log(acer.toggleLid());
console.log(acer.isLidOpen);

export default Laptop;
