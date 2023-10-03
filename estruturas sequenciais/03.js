/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
03 - Faça um Programa que peça dois números e imprima a soma.
*/
const prompt = require('prompt-sync')({ sigint: true });

var num_1 = parseInt(prompt("Digite um numero: "));
var num_2 = parseInt(prompt("Digite outro numero: "));

console.log(`${num_1} + ${num_2} = ${num_1 + num_2}`);
