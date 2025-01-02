

var list_name = ["Gustavo", "Guilherme", "Otávio", "Marcio"];


let [people1, people2, people3, people4] = list_name;


console.log(people1);
console.log(people2);
console.log(people3);
console.log(people4);

let pessoa = {
    nome: "Gustavo",
    idade: 26,
    rg: "54.582.574-X",
    sexo: "masculino",
}


let {nome, idade, rg, sexo} = pessoa;


console.log(`${nome} -- ${idade} -- ${rg} -- ${sexo}`);