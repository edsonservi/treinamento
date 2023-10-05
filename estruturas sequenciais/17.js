/*
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
17 - Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
    Considere que a cobertura da tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, 
    que custam R$ 80,00 ou em galões de 3,6 litros, que custam R$ 25,00. Informe ao usuário as quantidades de tinta a serem compradas 
    e os respectivos preços em 3 situações:
        comprar apenas latas de 18 litros;
        comprar apenas galões de 3,6 litros;
    misturar latas e galões, de forma que o desperdício de tinta seja menor.
    Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.
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

function calcularQuantidade(area) {
    var separador = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';
    console.clear();

    console.log(`\nPara cobrir a area informada: ${area} m² há as seguintes possibilidades:\n${separador}`);

    // Define variaveis de controle
    var rendimentoLatas = 18 * 6   //108;
    var rendimentoGalao = 3.6 * 6 //21.6;
    var latas = 0;
    var galao = 0;
    var resto = area;

    // quantas latas de 18 litros para cobrir a area
    while (resto > 0) {
        resto -= rendimentoLatas;
        latas++;
    }
    console.log(`Usando apenas latas de 18L, é necessário ${latas} lata${latas > 1 ? 's' : ''} ao custo de R$ ${parseFloat(latas * 80).toFixed(2)}`);

    // Reseta as variaveis de controle
    latas = 0;
    galao = 0;
    resto = area;

    // quantos galões de 3,6 litros para cobrir a area
    while (resto > 0) {
        resto -= rendimentoGalao;
        galao++;
    }
    console.log(`Usando apenas galões de 3,6 litros, é necessário ${galao} ${galao > 1 ? 'galões' : 'galão'} ao custo de R$ ${parseFloat(galao * 25).toFixed(2)}`);

    // reseta as variaveis de controle novamente 64,8
    latas = 0;
    galao = 0;
    resto = area;

    // Busca a menor quantidade combinando latas e galões
    while (resto > 0) {
        if (resto > rendimentoLatas) {
            resto -= rendimentoLatas;
            latas++;
        } else {
            resto -= rendimentoGalao;
            galao++
        }
    }

    // Configura a saida
    let mensagemLatas = latas > 0 ? `${latas} lata${latas > 1 ? 's' : ''}${galao > 0 ? ' e ' : ''}` : ``;
    let mensagemGalao = galao > 0 ? `${galao} ${galao > 1 ? 'galões' : 'galão'}` : ``;
    console.log(`Usando ambas, é necessário ${mensagemLatas}${mensagemGalao}, ao custo de R$ ${parseFloat(galao * 25 + latas * 80).toFixed(2)}`);

    // reseta as variaveis de controle novamente 64,8
    latas = 0;
    galao = 0;
    resto = area;

    // Busca o menor valor e quantidade, combinando latas e galões
    while (resto > 0) {
        if (resto > rendimentoLatas || resto > 3 * rendimentoGalao) {
            resto -= rendimentoLatas;
            latas++;
        } else {
            resto -= rendimentoGalao;
            galao++
        }
    }

    // Configura a saida novamente
    mensagemLatas = latas > 0 ? `${latas} lata${latas > 1 ? 's' : ''}${galao > 0 ? ' e ' : ''}` : ``;
    mensagemGalao = galao > 0 ? `${galao} ${galao > 1 ? 'galões' : 'galão'}` : ``;
    console.log(`A melhor solução é usar ${mensagemLatas}${mensagemGalao}, ao custo de R$ ${parseFloat(galao * 25 + latas * 80).toFixed(2)}`);

    console.log(separador);
}

var n = 0;
while (true) {
    console.clear();
    let area = getValues(`Qual o tamanho da area em metros quadrados que deseja pintar? `);
    calcularQuantidade(area);
    let controle = prompt(`Deseja sair, digite "x", ou tecle enter para orçar outra área:`).toLowerCase();
    if (controle == 'x') {
        break;
    }
}
