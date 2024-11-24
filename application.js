var nomes = ["Gustavo", "Guilherme", "Luis Otávio", "Marcio"]
var idade = [26, 28, 23, 40]


var pessoas = [["gustavo",26], ["guilherme",28], ["Luis Otávio", 23], ["Marcio", 40]]


var cidades = new Array ("São Paulo", "Campinas", "Osasco")


console.log("Nomes --> "+nomes)

console.log("Idade --> "+idade)

console.log("Pessoas --> "+pessoas)


// acessando cada indice

console.log(nomes[0])
console.log(nomes[1])
console.log(nomes[2])
console.log(nomes[3])

console.log(idade[0])
console.log(idade[1])
console.log(idade[2])
console.log(idade[3])

console.log("Pessoas --> "+pessoas[0][0])
console.log("Pessoas --> "+pessoas[0][1])

console.log("Pessoas --> "+pessoas[1][0])
console.log("Pessoas --> "+pessoas[1][1])

console.log("Pessoas --> "+pessoas[2][0])
console.log("Pessoas --> "+pessoas[2][1])

console.log("Pessoas --> "+pessoas[3][0])
console.log("Pessoas --> "+pessoas[3][1])


pessoas.push(["Lukas", 22])

console.log("Pessoas --> "+pessoas[4][0])
console.log("Pessoas --> "+pessoas[4][1])
