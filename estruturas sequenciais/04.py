"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
4 - Faça um Programa que peça 4 notas bimestrais e mostre a média.
"""
import os

os.system('cls')
notas = []
n = 0
while len(notas) < 4:
    nota = input(f'Digite a {n + 1}° nota: ').strip().replace(",", ".")

    try:
        float(nota)
    except ValueError:
        print('digite um numero válido por favor')
    else:
        if 11 > float(nota) >= 0:
            notas.append(float(nota))
            n += 1
        else:
            print('digite um numero entre 0 e 10 por favor')

os.system('cls')
print(f"\nMedia das notas {notas} é: {sum(notas) / len(notas)}\n")
