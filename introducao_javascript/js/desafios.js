//Desafio 1
let line = gets().split(" ");
let horas = parseInt(line[0]);
let velocidade = parseInt(line[1]);

let distancia = velocidade * horas;
let litrosCombustivel = distancia/12;

console.log(litrosCombustivel.toFixed(3));

// Desafio 2
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let X = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + X);

//Desafio 3
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let PROD = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + PROD);