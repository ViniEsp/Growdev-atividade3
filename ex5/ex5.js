// 5. Faça um programa usando a estrutura “for” que leia um número
// inteiro positivo e mostre na tela uma contagem de 0 até o valor
// digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

// const valor = prompt("Digite um numero inteiro:");
// let contagem = 0;

// for(contagem < i; i++){
//     console.log(contagem);
// }

const valor = prompt('Digite um valor:');
let contagem = '';

for (let i = 0; i <= valor; i++) {
  contagem += i + ",";
}

document.write("Contagem: " +contagem+ " FIM!");