class Shape {
    calculateArea() {
      // Implementação genérica para cálculo de área
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const rectangle = new Rectangle(4, 5);
  const circle = new Circle(3);
  
  console.log(rectangle.calculateArea()); // Saída: 20
  console.log(circle.calculateArea()); // Saída: ~28.27
  