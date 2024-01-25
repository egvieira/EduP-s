
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.saudacao = function() {
      console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
  }
  
  const pessoa2 = new Pessoa("Maria", 30);
  pessoa2.saudacao(); // Saída: Olá, meu nome é Maria e tenho 30 anos.
  