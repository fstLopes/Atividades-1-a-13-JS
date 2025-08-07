let n1 = prompt("digite a nota");
let n2 = prompt("digite a nota");
let n3 = prompt("digite a nota");
let peso = prompt("digite o peso")
n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);

let mediaP = (n1*peso+n2*peso+n3*peso)/(peso+peso+peso);

console.log("O soma desses numeros é "+mediaP);