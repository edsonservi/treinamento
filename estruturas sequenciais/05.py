"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
5 - Faça um Programa que converta metros para centímetros.
"""
import os


def clean():
    return os.system('cls')


def exibe(message):
    separator = '=~' * int(len(message) / 2 + 1)
    os.system('cls')
    print(f"\n{separator}")
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


metros = getValue('Insira a medida em metros: ')
centimetros = metros * 100
clean()
exibe(f"{metros:.2f} mt é igual a {centimetros:.0f} cm.")
