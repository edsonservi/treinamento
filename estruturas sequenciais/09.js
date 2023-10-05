/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
9 - Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
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

var fahrenheitTemp = getValues("Informe a temperatura em Fahrenheit:");
var celsiusTemp = parseFloat(5 * ((fahrenheitTemp - 32) / 9)).toFixed(2);
console.log(`A temperatura ${fahrenheitTemp}°F em Celcius é: ${celsiusTemp}°C`);

