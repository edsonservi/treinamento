/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
05 - Faça um Programa que converta metros para centímetros.
*/
const prompt = require('prompt-sync')({ sigint: true });

while (true) {
    var metros = prompt("Informe uma medida em metros: ");
    metros = metros.replace(/,/g, ".")
    metros = parseFloat(metros);
    if (Number.isNaN(metros)) {
        console.log("Por favor, informe um numero válido...")
        continue
    } else {
        let centimetros = Math.round(metros * 100);
        console.log(`${metros} metros é igual a: ${centimetros} centimetros.`)
        break
    }
}

