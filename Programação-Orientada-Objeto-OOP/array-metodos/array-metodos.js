// Método 'some': verifica se pelo menos um elemento satisfaz a condição

const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // Saída: true


// Método 'every': verifica se todos os elementos satisfazem a condição

const fruits = ['apple', 'banana', 'orange', 'grape'];

const allFruitsHaveMoreThanThreeLetters = fruits.every((fruit) => {
  return fruit.length > 3;
});

console.log(allFruitsHaveMoreThanThreeLetters); // Saída: true


// Método 'filter': cria um novo array com elementos que passam na condição

const ages = [18, 21, 16, 25, 30];

const adults = ages.filter((age) => {
  return age >= 18;
});

console.log(adults); // Saída: [18, 21, 25, 30]


// Método 'forEach': executa uma função em cada elemento do array

const colors = ['red', 'green', 'blue'];

colors.forEach((color) => {
  console.log(color);
});
// Saída:
// red
// green
// blue


// Método 'reduce': reduz o array a um único valor


const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Saída: 15


// Método 'map': cria um novo array com base na transformação dos elementos


const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // Saída: [2, 4, 6, 8, 10]
