// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.


let soma = 0;
let Positivos = 0;
let Negativos = 0;

for (let i = 1; i <= 10; i++) {
  let numero = prompt("Digite o número " + i + ":");
  soma += numero;


  if (numero > 0) {
    Positivos++;
  } else if (numero < 0) {
    Negativos++;
  }
}

let media = soma / 10;

let percentualPositivos = (Positivos / 10) * 100;
let percentualNegativos = (Negativos / 10) * 100;

console.log("Média: " + media);
console.log("Quantidade de valores positivos: " + Positivos);
console.log("Quantidade de valores negativos: " +Negativos);
console.log("Percentual de valores positivos: " + percentualPositivos + "%");
console.log("Percentual de valores negativos: " + percentualNegativos + "%");