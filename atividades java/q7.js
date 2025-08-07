let produto = prompt("Digite o valor do produto:");
produto = Number(produto);

let desc = (produto * (5/100));
let desconto = produto - desc;

console.log("Com desconto fica "+desconto);