


window.addEventListener("load", ()=>{

    let expression = ""


    let termo_1 = prompt("Digite o primeiro termo")
    let sinal = prompt("Digite o sinal")
    let termo_2 = prompt("Digite o segundo termo")

    expression = (termo_1+sinal+termo_2)

    switch(sinal){
        case "+":
            console.log(`${expression} = ${(Number(termo_1))+(Number(termo_2))}`)
            break;
        case "-":
            console.log(`${expression} = ${(Number(termo_1))-(Number(termo_2))}`)
            break;
        case "*":
            console.log(`${expression} = ${(Number(termo_1))*(Number(termo_2))}`)
            break;
        case "/":
            console.log(`${expression} = ${(Number(termo_1))/(Number(termo_2))}`)
            break;
    }
})