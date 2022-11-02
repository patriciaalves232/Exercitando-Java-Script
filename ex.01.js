/* faça um programa para calcular o valor de uma viagem.

Você terá 5 variaveis, sendo elas :
1- preço do etanol ;
2-preço da gasolina ;
3-o tipo de combustivel que está no seu carro;
4-gasto médio de combustivel do carro por Km;
5-Distância de Km da viagem;

Imprima no console o valor que será gasto para realizar está viagem. */

const precoEtanol = 5;
const precoDaGasolina = 6;
const gastomedio = 10;
const distanciaDaviagem = 100;
const tipodecombustivel = 'etanol';

const litrosConsumidos= distanciaDaviagem/gastomedio;
 if
    (tipodecombustivel ==='etanol'){
        const valorgasto = litrosConsumidos*precoEtanol;
        console.log(valorgasto.toFixed(2));
    }
 else{
    const valorgasto=litrosConsumidos*precoDaGasolina;
    console.log(valorgasto.toFixed(2));
 }










