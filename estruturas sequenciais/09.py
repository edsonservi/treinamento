"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
9 - Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre 
    a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
"""
import recursos as rc

fahrenheit = rc.getValueFloat("Informe a temperatura em Fahrenheit F° ")
celcius = 5 * (fahrenheit - 32) / 9
rc.exibe(f"{fahrenheit:.0f} F° em célcius é igual a {celcius:.1f} C°")
