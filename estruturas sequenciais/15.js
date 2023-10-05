/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
15 - Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
    Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 
    8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
        salário bruto.
        quanto pagou ao INSS.
        quanto pagou ao sindicato.
        o salário líquido.
        calcule os descontos e o salário líquido, conforme a tabela abaixo:
            + Salário Bruto : R$
            - IR (11%) : R$
            - INSS (8%) : R$
            - Sindicato ( 5%) : R$
            = Salário Liquido : R$
        Obs.: Salário Bruto - Descontos = Salário Líquido.
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

var amoutPerHour = getValues("Qual o valor do salário / hora? R$");
var workHour = getValues("Quantas horas foram trabalhadas esse mês?");
var grossSalary = parseFloat(amoutPerHour * workHour).toFixed(2);
var irTax = parseFloat(grossSalary / 100 * 11).toFixed(2);
var inssTax = parseFloat(grossSalary / 100 * 8).toFixed(2);
var sindicateTax = parseFloat(grossSalary / 100 * 5).toFixed(2);
var netSalary = parseFloat(grossSalary - irTax - inssTax - sindicateTax).toFixed(2);

console.log(`
    + Salario Bruto:... R$ ${grossSalary}
    - IR (11%):........ R$  ${irTax}
    - INSS (8%):....... R$  ${inssTax}
    - Sindicato (5%):.. R$  ${sindicateTax}
    = Salário Liquido : R$ ${netSalary}
`)