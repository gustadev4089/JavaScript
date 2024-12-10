

let current = prompt("Informe o ano Atual");
let born = prompt("Informe o ano do seu nascimento");
let age = 0;

if (current > age){
    age = current - born
}else{
    age = born - current
}


alert(`Sua idade atual é --> ${age}`)