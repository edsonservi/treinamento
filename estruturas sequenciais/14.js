/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
14 - João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. 
    Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) 
    deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) 
    e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que 
    João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
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

var weightFishing = getValues("Qual o peso do pescado obtido: Kg")
if (weightFishing <= 50) {
    console.log(`Não houve excedente hoje, sem impostos a recolher.`);
} else {
    let fee = parseFloat((weightFishing - 50) * 4).toFixed(2);
    console.log(`${weightFishing - 50} Kg de peixe alem do limite de isenção (50 Kg), deve ser pago uma taxa de R$ ${fee}.`);
}


