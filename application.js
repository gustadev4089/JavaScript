
// Spread com uma lista simples

let convidados = ["Gustavo", "Pedro", "Marcio"];
let novos = ["Matheus", "Otavio", "Marlene", "Miranda"];

let total_pessoas = [...novos, "Maria", "Leticia", "Marcelo", ...convidados];

console.log(total_pessoas);


// Spread com lista de objetos

let pessoas_antigas = [
    {nome: "Marcia", idade: 34, sexo: "feminino"},
    {nome: "Luiz", idade: 23, sexo: "masculino"},
    {nome: "Sandra", idade: 30, sexo: "feminino"},
    {nome: "Marco", idade: 45, sexo: "masculino"},
]

let nova_lista = [
    ...pessoas_antigas,
    {nome: "Mario", idade: 21, sexo: "masculino"},
    {nome: "Sabino", idade: 60, sexo: "masculino"},
    {nome: "Leticia", idade: 26, sexo: "feminino"},
    {nome: "Carla", idade: 28, sexo: "feminino"},
]

console.log(nova_lista)



// Rest

const show_convidados = (pessoa, ...outros)=>{
    let total = [pessoa, ...outros];
    console.log(`Lista de convidados: ${total}`);
}

show_convidados("marcio", "Malvino", "Pedro", "Augustus", "Maximos");