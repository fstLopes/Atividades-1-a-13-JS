const Kimetsu = {

    nota: "",
    views: "",
    genero: ""

}
Kimetsu.nota = prompt("Qual a nota para o filme de Kimetsu no Yaiba(Demon Slayer)")
Kimetsu.nota = Number(Kimetsu.nota)

Kimetsu.views = prompt("Quantas vizualizações teve o filme de Kimetsu no Yaiba(Demon Slayer)")
Kimetsu.views = Number(Kimetsu.views)

Kimetsu.idade = prompt("Qual a idade para assistir o filme de Kimetsu no Yaiba(Demon Slayer)")
Kimetsu.idade = Number(Kimetsu.idade)


const Minecraft = {

    nota: "",
    views: "",
    genero: ""

}
Minecraft.nota = prompt("Qual a nota para o filme de Minecraft")
Minecraft.nota = Number(Minecraft.nota)

Minecraft.views = prompt("Quantas vizualizações teve o filme de Minecraft")
Minecraft.views = Number(Minecraft.views)

Minecraft.idade = prompt("Qual idade para assistir o filme de Minecraft")
Minecraft.idade = Number(Minecraft.idade)

console.log("O filme de Kimetsu no Yaiba(Demon Slayer) teve nota ", +Kimetsu.nota, "e um total de ", +Kimetsu.views, ", o filme é para maiores de ", +Kimetsu.idade)

console.log("O filme de Minecraft teve nota ", +Minecraft.nota, "e um total de ", +Minecraft.views, ", o filme é para maiores de ", +Minecraft.idade)


if (Minecraft.nota > Kimetsu.nota)
{
    console.log("O filme de Minecraft foi melhor avaliado")
}
else if(Kimetsu.nota > Minecraft.nota)
{
    console.log("O filme de Kimetsu no Yaiba foi melhor avaliado")
}
else
{
    console.log("Os dois filmes tiveram a mesma nota")
}