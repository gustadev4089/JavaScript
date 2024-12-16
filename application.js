
class Pessoa{
    constructor(nome, idade, is_masc){
        this.nome = nome
        this.idade = idade
        this.sexo = is_masc ? "Mascule":"Female"

        this.action_speaking = (msg)=>{
            console.log(`Speaking --> ${msg}`)
        }

        this.action_listening = ()=>{
            console.log(`I'm ${this.nome} and i'm listening...`)
        }
    }

    
}

class Animal{
    constructor(nome){
        this.nome = nome;
    }

    printNome = ()=>{
        return this.nome   
    }
}


class Cachorro extends Animal{
    constructor(nome, tipo, raca){
        // Invocando o constructor da Classe Animal
        super(nome)

        this.tipo = tipo
        this.raca = raca
    }
    
    action_latir = ()=>{
        return "AU AU AU !!!"
    }
}

let pessoa_1 = new Pessoa("Gustavo", 25, true)

let pessoa_2 = new Pessoa("Maria", 24, false)

pessoa_1.action_speaking("Hi, i'm trying to speak with you")

pessoa_2.action_listening()


let dog1 = new Cachorro("teddy", "cachorro", "chetsu")

console.log(dog1)