"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
10 - Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
"""
import recursos as rc

celsius = rc.getValueFloat("Informe a temperatura em Celsius C° ")
fahrenheit = (celsius * 9 / 5) + 32
rc.exibe(f"{celsius:.1f} C° em fahrenheit é igual a {fahrenheit:.2f} F°")
