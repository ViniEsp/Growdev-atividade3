// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;


let menorAltura = Infinity;
let maiorAltura = 0;

for (let i = 1; i <= 3; i++) {
  let altura = parseFloat(prompt(`Digite a altura da pessoa ${i}:`));

  if (altura < menorAltura) {
    menorAltura = altura;
  }

  if (altura > maiorAltura) {
    maiorAltura = altura;
  }
}

document.write("Menor altura: " + menorAltura + "<br>")
document.write("Maior altura: " + maiorAltura)
