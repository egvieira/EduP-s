
function criarPessoa(nome, idade) {
    return {
      nome: nome,
      idade: idade,
      saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
      }
    };
  }
  
  const pessoa1 = criarPessoa("João", 25);
  pessoa1.saudacao(); // Saída: Olá, meu nome é João e tenho 25 anos.
  