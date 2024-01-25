// prototype.js

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  Pessoa.prototype.saudacao = function() {
    console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
  }
  
  const pessoa3 = new Pessoa("Pedro", 35);
  pessoa3.saudacao(); // Saída: Olá, meu nome é Pedro e tenho 35 anos.
  