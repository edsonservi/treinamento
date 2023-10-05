/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
6 - Faça um Programa que peça o raio de um círculo, calcule e mostre sua área. Nota: raio = metade do diametro do circulo, área do circulo é = pi(+ ou - 3.1415) * raio ao quadrado.
*/
const prompt = require('prompt-sync')({ sigint: true });

while (true) {
    var raio = prompt("Informe o raio do circulo em centímetros: ");
    raio = raio.replace(/,/g, ".")
    raio = parseFloat(raio);
    if (Number.isNaN(raio)) {
        console.log("Por favor, informe um numero válido...")
        continue
    } else {
        let areaCirculo = (Math.PI * raio ** 2).toFixed(3);
        console.log(`um circulo com raio ${raio} cm tem área igual a: ${areaCirculo} cm²`)
        break
    }
}
