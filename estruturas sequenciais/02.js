/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
02 - Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
*/
const prompt = require('prompt-sync')({ sigint: true });

var num = prompt("Digite um numero: ");
num = parseInt(num)
console.log(`O numero informado foi ${num}`);
