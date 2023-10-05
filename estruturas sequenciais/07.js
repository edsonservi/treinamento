/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
7 - Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário. 
*/

const prompt = require('prompt-sync')({ sigint: true });

function getSide(nameSide, unit) {
    var messure = 0;
    while (true) {
        var side = prompt(`Informe ${nameSide} da área em ${unit}: `);
        side = side.replace(/,/g, ".")
        side = parseFloat(side);
        if (Number.isNaN(side)) {
            console.log("Por favor, informe uma medida válida...")
            continue
        } else {
            messure = side
            break
        }
    }
    return messure;
}

var sideA = getSide('largura', 'centimetros');

var area = sideA ** 2;
console.log(`A área de um quadrado cuja aresta tenha ${sideA} cm é ${area} cm² e o dobro é ${area * 2} cm².`)
