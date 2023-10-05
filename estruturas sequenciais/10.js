/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
10 - Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
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

var celsiusTemp = getValues("Informe a temperatura em Celsius:");
var fahrenheitTemp = parseFloat((celsiusTemp * 9 / 5) + 32).toFixed(2);
console.log(`A temperatura ${celsiusTemp}°C em Fahrenheit é: ${fahrenheitTemp}°F `);


