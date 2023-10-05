/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
8 - Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. 
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

var valuePerHour = getValues("Qual o valor recebido por hora trabalhada? R$:");
var hours = getValues("Quantas horas foram trabalhadas no mês?")
console.log(`Com os valores informados, seu sálario este mes será de R$ ${parseFloat(hours * valuePerHour).toFixed(2)}.`)

