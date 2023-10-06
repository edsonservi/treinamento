"""
fonte: https://wiki.python.org.br/EstruturaSequencial
Estruturas Sequenciais
12 - Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, 
    usando a seguinte fórmula: (72.7*altura) - 58.
"""
import recursos as rc

heightPeople = rc.getValueFloat("Qual a medida em metros de sua altura?")
idealWeight = float(72.7 * heightPeople - 58)
rc.exibe(f"O peso ideal para alguem que mede {heightPeople:.2f} mt é de {idealWeight:.2f}.")
