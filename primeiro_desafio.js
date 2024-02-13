/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço de combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprime no console o valor que será gasto de combustível para realizar esta viagem
*/

const precoDoCombustivel = 5.79;
const quilometrosPorLitro = 12;
const distaciaDaViagem = 1580;

const result = distaciaDaViagem / quilometrosPorLitro * precoDoCombustivel;

console.log(result.toFixed(2));



