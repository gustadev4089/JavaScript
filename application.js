function Pessoa(nome, idade, masc){
    this.nome = nome;
    this.idade = idade;
    this.sexo = masc == true ?"Masculino":"Feminino"


    this.action_speak = (msg)=>{
        console.log(`Hii, ${msg}`)
    }

    this.action_listening = ()=>{
        console.log(`I'm ${this.nome} and to be listening... `)
    }
}



addEventListener("load", ()=>{
    let person_1 = new Pessoa("Gustavo", 24, true);
    let person_2 = new Pessoa("Maria", 20, true);

    person_1.action_speak("Can i ask you sometinhg? ")

    person_2.action_listening()
})