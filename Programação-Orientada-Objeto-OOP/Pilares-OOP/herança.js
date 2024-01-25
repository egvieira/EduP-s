class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} está comendo.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} está latindo.`);
  }
}

const myDog = new Dog("Fido");
myDog.eat(); // Saída: "Fido está comendo."
myDog.bark(); // Saída: "Fido está latindo."
