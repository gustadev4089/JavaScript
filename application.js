
function running(){

    let pessoa1 = {
        nome: "Gustavo",
        idade: 26,
        cpf: "745.757.189-34",
        RG: "67.453.213-X",
    }

    let pessoa2 = {
        "nome":"Guilherme",
        "idade": 24,
        "cpf": "123.456.789-12",
        "RG": "12.123.456-A"
    }


    let pessoas = [
        {
            nome: "Thais",
            idade: 23,
            cpf: "123.456.789-00",
            RG: "12.345.678-B"
        },

        {
            nome: "Rogerio",
            idade: 20,
            cpf: "123.456.789-00",
            RG: "12.345.678-B"
        },

        {
            nome: "Marcelo",
            idade: 30,
            cpf: "123.456.789-00",
            RG: "12.345.678-B"
        }
    ]

    // Extraindo uma variável de um objeto
    let {nome} = pessoa1;

    console.log(nome)

    // Mostrando o contêudo da variável
    console.log(pessoa2.RG)

    // Usando FOR loop para percorrer a lista de objetos
    for(let index=0; index < pessoas.length; index++){
        console.log(pessoas[index])
    }

    pessoas.forEach(element => {
        console.log(`forEach --> ${element.nome}`)
    });

}


window.addEventListener("load", ()=>{
    running();
})