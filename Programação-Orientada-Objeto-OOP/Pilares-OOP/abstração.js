class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      // Método abstrato, sem implementação
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log(`${this.name} está latindo.`);
    }
  }
  
  const myDog = new Dog("Fido");
  myDog.makeSound(); // Saída: "Fido está latindo."
  