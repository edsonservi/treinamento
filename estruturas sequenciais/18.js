/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
18 - Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), 
    calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
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

function convertToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60 == 0 ? '00' : parseFloat(seconds % 60).toFixed(0);
    remainingSeconds = remainingSeconds.length == 1 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${remainingSeconds}`;
}

var mb = getValues(`Quantos Megabytes possue o arquivo? Mb `);
var mbps = getValues(`Qual a velocidade da conexão? Mbps `);
var tempo = mb / mbps;
console.clear();
console.log(`\nO download de um arquivo de  ${parseFloat(mb).toFixed(2)} Mb em uma conexão de ${parseFloat(mbps).toFixed(2)} Mbps levará ${convertToMinutes(tempo)} minutos.\n`);