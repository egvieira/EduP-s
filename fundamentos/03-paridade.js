function avaliarParidade(limiteSuperior) {
  for (let i = 0; i <= limiteSuperior; i++) {
    if (i % 2 == 0) {
      console.log(`${i} é PAR`);
    } else {
      console.log(`${i} é ÍMPAR`);
    }
  }
}

avaliarParidade(10);
