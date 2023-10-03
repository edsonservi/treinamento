/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
04 - Faça um Programa que peça as 4 notas bimestrais e mostre a média
*/
const prompt = require('prompt-sync')({ sigint: true });

var nota_1 = parseInt(prompt("Digite a nota do primeiro bimestre: "));
var nota_2 = parseInt(prompt("Digite a nota do segundo bimestre: "));
var nota_3 = parseInt(prompt("Digite a nota do terceiro bimestre: "));
var nota_4 = parseInt(prompt("Digite a nota do quarto bimestre: "));

var media =  (nota_1 + nota_2 + nota_3 + nota_4) / 4