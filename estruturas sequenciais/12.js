/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
12 - Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58.
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

var heightPeople = getValues("Qual a medida em metros de sua altura?")
var idealWeight = parseFloat(72.7 * heightPeople - 58).toFixed(2);
console.log(`O peso ideal para alguem que mede ${parseFloat(heightPeople).toFixed(2)} mt é de ${idealWeight}.`);
