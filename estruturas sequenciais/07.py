"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
7 - Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário. 
"""
import recursos as rc

sideA = rc.getValueFloat(
    "informe o tamanho de um dos lados do quadrado em centimetros: ")

area = sideA ** 2
rc.exibe(
    f"A área de um quadrado cuja aresta tenha {sideA} cm é {area} cm² e o dobro é {area * 2} cm².")
