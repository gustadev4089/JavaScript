

function get_all_info(){
    const title_message = document.querySelector("#field_title_message");
    const message = document.querySelector("#field_message");
    const color_text = document.querySelector("#field_color");

    add_li(title_message.value, message.value);

    change_color(color_text.value)
}


function change_color(color){
    const element_content = document.querySelector(".section2-content ul")
    element_content.style.color = `${color}`
}


function add_li(title, message){
    const element_ul = document.querySelector(".section2-content ul")

    element_ul.innerHTML += `<li> <h3>${title}</h3> <p>${message}</p> </li>`
}


// Declarar uma função dentro de uma variável

var conta = function(a, b){
    return a + b
}

console.log(`Função conta --> ${conta(10, 50)}`);



(function(){
    console.log("Função chamada no momento que é declarada")
})()