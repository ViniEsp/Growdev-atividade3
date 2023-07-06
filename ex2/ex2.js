// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

// let alturaPedro = 1.5; 
// let alturaLucas = 1.1; 
// let anos = 0; 

// while (alturaLucas <= alturaPedro) {
//   alturaPedro += 0.02; 
//   alturaLucas += 0.03; 
//   anos++;
// }

// document.write("Serão necessários"+ anos +"anos para Lucas e Pedro terem o mesmo tamanho");

// anos = 0; 
// while (alturaLucas <= alturaPedro) {
//   alturaPedro += 0.02; 
//   alturaLucas += 0.03;
//   anos++;
// }

// document.write("Serão necessários mais"+ anos +"anos para Lucas ser maior que Pedro");

let alturaPedro = 150;
let alturaLucas = 110;
let anos = 0;

while (alturaPedro > alturaLucas) {
  alturaPedro += 2;
  alturaLucas += 3;
  if (alturaLucas === alturaPedro) {
    document.write(
      `Serão necessários ${anos} anos para Lucas e Pedro terem o mesmo tamanho. <br>`
    );
  }
  anos++;
}
document.write(
  `Serão necessários ${anos} anos para Lucas ser maior que Pedro.`
);
