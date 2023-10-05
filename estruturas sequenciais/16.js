/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
16 - Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados 
    da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e 
    que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a 
    quantidades de latas de tinta a serem compradas e o preço total.
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

var sizeRoom = getValues("Qual o tamanho, em m² da área a ser coberta? ");
var qtPaintCans = 0;
var performance = qtPaintCans * (18 * 3);
while (performance < sizeRoom) {
    qtPaintCans++
    performance = qtPaintCans * (18 * 3);
}

console.log(`Para cobrir uma area de ${sizeRoom} m² é necessário adquirir ${qtPaintCans} ${qtPaintCans == 1 ? 'lata' : 'latas'} de tinta ao custo de R$ ${parseFloat(qtPaintCans * 80).toFixed(2)}.`)
