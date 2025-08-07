let distancia = prompt("distancia (km): ");
distancia = Number(distancia);
let velocidade = prompt("velocidade media (km/h): ");
velocidade = Number(velocidade);
let preço = prompt("preço do litro: ");
preço = Number(preço);
let consumo = prompt("consumo de combustivel (km/L): ");
consumo = Number(consumo);

let viagem = (distancia / velocidade);
console.log("O tempo de viagem é: "+viagem)
let litros = (distancia / consumo);
console.log("A quantidade de L é: "+litros)
let custo = (distancia * preço);
console.log("O custo de viagem é: "+custo)
