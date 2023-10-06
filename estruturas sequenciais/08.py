"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
8 - Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
    Calcule e mostre o total do seu salário no referido mês. 
"""
import recursos as rc

vlHora = rc.getValueFloat("Qual o valor da hora trabalhada? R$ ")
jornada = rc.getValueFloat("Quantas horas foram trabalhadas no mes? ")

rc.exibe(
    f"Com uma jornada de {jornada} hrs trabalhadas no mês, o salario será de R$ {(vlHora * jornada):.2f}")
