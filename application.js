
const req_teste = async (nome)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(nome == "Gustavo"){
                resolve("Nome confirmado com sucesso !!!!");
            }else{
                reject("Nome está incorreto !!!");
            }
        }, 4000);
    })
}

let nome = prompt("Informe o nome do usuário por favor !!!!");



const running_app = async ()=>{
    await req_teste(nome).then((resolve)=>{
        console.log(`o contêudo da promise eh --> ${resolve}`)
    }).catch((erro)=>{
        console.log(`a promise foi rejeitada --> ${erro}`)
    })
    
    console.log("testando uma promise !!!!");
}


running_app();




