"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
6 - Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
    Nota: raio = metade do diametro do circulo, área do circulo é = pi(+ ou - 3.1415) * raio ao quadrado.
"""
import os
from math import pi


def clean():
    return os.system('cls')


def exibe(message):
    separator = '=~' * int(len(message) / 2 + 1)
    os.system('cls')
    print(f"\n{separator}\n")
    print(message)
    print(f"\n{separator}")
    print(f"\n" * 3)


def getValue(message):
    while True:
        clean()
        value = input(message).strip()
        try:
            float(value)
        except ValueError:
            clean()
            print("Insira um valor válido")
            continue
        else:
            value = float(value)
            break
    return value


raio = getValue("informe o raio do circulo em centimetros: ")
area = pi * raio**2
exibe(
    f"A area de um circulo cujo raio seja {raio} cm é igual a {area:.2f} cm².")
