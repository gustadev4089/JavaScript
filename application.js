
let voltas = 10;


while(voltas > 0){
    console.log(`While --> ${voltas}`)
    voltas--;
}

for(let loops = 1; loops <= 10; loops++){
    console.log(`For --> ${loops}`)
}

let loops = 0
do{ // <-- Nesse tipo de função primeiro é executado o contêudo para depois fazer a verificação
    loops++;
    console.log(`Do While --> ${loops}`)
}while(loops < 10);

