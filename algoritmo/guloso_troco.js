/*
Algoritmo guloso ou míope é técnica de projeto de algoritmos que tenta resolver o problema fazendo a escolha localmente ótima em cada 
fase com a esperança de encontrar um ótimo global.
Na solução de alguns problemas combinatórios a estratégia gulosa pode assegurar a obtenção de soluções ótimas, o que não é muito comum.
No entanto, quando o problema a ser resolvido pertencer à classe NP - completo ou NP - difícil, a estratégia gulosa torna - se atrativa para 
a obtenção de solução aproximada em tempo polinomial.
*/

function guloso(valor) {
    let moedas = {
        "100": 0, "050": 0, "020": 0, "010": 0, "005": 0, "002": 0,
        "001": 0, "0.50": 0, "0.10": 0, "0.05": 0, "0.01": 0
    };
    let resto = valor;
    for (let chave in moedas) {
        let desconto = Math.floor(resto / parseFloat(chave));
        resto = resto % parseFloat(chave);
        console.log(`chave: ${chave}, qt: ${moedas[chave]}, desconyo: ${desconto}, resto: ${resto.toFixed(2)}`)
        if (desconto > 0) {
            moedas[chave] = desconto;
        }
    }

    console.log('#'.repeat(40));
    console.log(`O troco otimizado para o valor de R$ ${valor.toFixed(2)}:`);
    for (let chave in moedas) {
        let qtde = moedas[chave];
        if (qtde > 0) {
            let moeda = parseFloat(chave).toFixed(2);
            moeda = moeda.replace(".", ",");
            if (parseFloat(chave) > 1) {
                console.log(`\t${qtde} notas de R$ ${moeda}`);
            } else {
                console.log(`\t${qtde} moedas de R$ ${moeda}`);
            }
        }
    }
    console.log('#'.repeat(40));
}


let valores = [589.47, 313.20, 110.60, 89.26];
for (let numero of valores) {
    guloso(numero);
}