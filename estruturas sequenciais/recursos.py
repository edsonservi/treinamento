import os
from math import pi


def clean():
    """
    Limpa o terminal.
    """

    return os.system('cls')


def exibe(message):
    """
    Exibe uma mensagem formatada no terminal
    :param message: string

    """
    separator = '=~' * int(len(message) / 2 + 1)
    os.system('cls')
    print(f"\n{separator}\n")
    print(message)
    print(f"\n{separator}")
    print(f"\n" * 3)


def getValueFloat(message):
    """
    Captura um valor float.
    :message: string
    :return float
    """

    while True:
        clean()
        value = input(f"{message} ").strip()
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
