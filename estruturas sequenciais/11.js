/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
11 - Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
    o produto do dobro do primeiro com metade do segundo.
    a soma do triplo do primeiro com o terceiro.
    o terceiro elevado ao cubo.
*/
const prompt = require('prompt-sync')({ sigint: true });

function getValues(message) {
    var value = 0;
    while (true) {
        var getValue = prompt(`${message} `);
        getValue = getValue.replace(/,/g, ".")
        getValue = parseFloat(getValue);
        if (Number.isNaN(getValue)) {
            console.log("Por favor, informe um valor válido...")
            continue
        } else {
            value = getValue
            break
        }
    }
    return value;
}

var numeroInteiro1 = getValues("Informe um numero Inteiro:")
var numeroInteiro2 = getValues("Informe outro numero Inteiro:")
var numeroReal = getValues("Informe um numero Real:")
var calculation1 = parseFloat((numeroInteiro1 * 2 ) * (numeroInteiro2 / 2)).toFixed(2);
var calculation2 = 3 * numeroInteiro1 + numeroReal;
var calculation3 = numeroReal ** 3;
console.log(`(2 * ${parseInt(numeroInteiro1)}) x (${parseInt(numeroInteiro1)} / 2) = ${calculation1}`);
console.log(`3 * ${parseInt(numeroInteiro1)} + ${parseInt(numeroReal)} = ${calculation2}`);
console.log(`${numeroReal}³ = ${calculation3}`);
