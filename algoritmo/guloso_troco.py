"""
Algoritmo guloso ou míope é técnica de projeto de algoritmos que tenta resolver o problema fazendo a escolha localmente ótima em cada 
fase com a esperança de encontrar um ótimo global.
Na solução de alguns problemas combinatórios a estratégia gulosa pode assegurar a obtenção de soluções ótimas, o que não é muito comum.
No entanto, quando o problema a ser resolvido pertencer à classe NP-completo ou NP-difícil, a estratégia gulosa torna-se atrativa para 
a obtenção de solução aproximada em tempo polinomial.
"""


def guloso(valor):
    moedas = {"100": 0, "50": 0, "20": 0, "10": 0, "5": 0, "2": 0,
              "1": 0, "0.50": 0, "0.10": 0, "0.05": 0, "0.01": 0}
    resto = valor
    for chave in moedas:
        desconto = resto // float(chave)
        resto = resto % float(chave)
        if desconto > 0:
            moedas[chave] = int(desconto)

    print('#' * 40)
    print(f"O troco otimizado para o valor de R$ {valor:.2f}:")
    for chave, qtde in moedas.items():
        if qtde > 0:
            moeda = f"{float(chave):.2f}"
            moeda = moeda.replace(".", ",")
            if float(chave) > 1:
                print(
                    f"\t{qtde} notas de R$ {moeda}")
            else:
                print(
                    f"\t{qtde} moedas de R$ {moeda}")
    print('#' * 40)


valores = [589.47, 313.20, 110.60, 89.26]
for numero in valores:
    guloso(numero)
