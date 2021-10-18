class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    return this.sides * this.sideLength;
  }
}

class Square extends Shape {
  calcPerimeter(){
    return this.sideLength * this.sides
  }
}

class Triangle extends Shape {
  calcPerimeter(){
    return this.sideLength * this.sides
  }
}

const square = new Square ("square", 4, 5);
const triangle = new Triangle("triangle", 3, 3);

console.log(square.calcPerimeter(), "- ruudu ümbermõõt");
console.log(triangle.calcPerimeter(), "- kolmnurga ümbermõõt");




