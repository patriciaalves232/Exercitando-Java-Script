/* Faça um progrma para calcular o valor de uma viagem .

Você terá 3 variaveis. Sendo elas :
1-Preço do combustivel ;
2-Gasto médio de combustivel do carro por KM;
3- Distância em KM de viagem; 
*/

const precoCombustivel= 5.79;
const kmPorLitros=10;
const distanciaEmKm =100;

const litrosConsumidos = distanciaEmKm /kmPorLitros;
const valorgasto= litrosConsumidos*precoCombustivel;
console.log(valorgasto.toFixed(2));