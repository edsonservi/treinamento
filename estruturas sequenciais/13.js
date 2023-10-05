/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
13 - Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
    Para homens: (72.7*h) - 58
    Para mulheres: (62.1*h) - 44.7 
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
var idealWeightMan = parseFloat(72.7 * heightPeople - 58).toFixed(2);
var idealWeightWoman = parseFloat(62.1 * heightPeople - 44.7).toFixed(2);
console.log(`O peso ideal para alguem que mede ${parseFloat(heightPeople).toFixed(2)} mt é de ${idealWeightMan} caso seja do gênero masculino e de ${idealWeightWoman} caso seja do genero feminino.`);
