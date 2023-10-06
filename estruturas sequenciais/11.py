"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
11 - Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
    o produto do dobro do primeiro com metade do segundo.
    a soma do triplo do primeiro com o terceiro.
    o terceiro elevado ao cubo.
"""
import recursos as rc

numeroInteiro1 = rc.getValueFloat("Informe um numero Inteiro:")
numeroInteiro2 = rc.getValueFloat("Informe outro numero Inteiro:")
numeroReal = rc.getValueFloat("Informe um numero Real:")
calculation1 = (numeroInteiro1 * 2) * (numeroInteiro2 / 2)
calculation2 = 3 * numeroInteiro1 + numeroReal
calculation3 = numeroReal ** 3
rc.exibe(f"(2 * {numeroInteiro1}) x ({numeroInteiro1} / 2) = {calculation1}\n3 * {numeroInteiro1} + {numeroReal} = {calculation2}\n{numeroReal}³ = {calculation3}")
