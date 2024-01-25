// class.js

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    saudacao() {
      console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
  }
  
  const pessoa4 = new Pessoa("Ana", 40);
  pessoa4.saudacao(); // Saída: Olá, meu nome é Ana e tenho 40 anos.
  