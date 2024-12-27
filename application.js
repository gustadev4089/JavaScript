let all_Box = document.getElementsByClassName("box"); // Pegando todos da classe box

for(let box of all_Box){ // Estilizando todas as box
    box.style.width = "100px";
    box.style.height = "100px";
    box.style.margin = "20px auto";
    box.style.background = "green";
    box.style.border = "2px solid black";
    box.style.borderRadius = "6px";
}




window.addEventListener("click", (event)=>{
    if(event.target.id == "box1"){
        event.target.style.backgroundColor = event.target.style.backgroundColor == "green" ? "red" : "green"; 
    }

    if(event.target.id == "box2"){
        event.target.style.backgroundColor = event.target.style.backgroundColor == "green" ? "blue" : "green"; 
    }

    if(event.target.id == "box3"){
        event.target.style.backgroundColor = event.target.style.backgroundColor == "green" ? "yellow" : "green"; 
    }

    if(event.target.id == "box4"){
        event.target.style.backgroundColor = event.target.style.backgroundColor == "green" ? "purple" : "green"; 
    }

    if(event.target.id == "box5"){
        event.target.style.backgroundColor = event.target.style.backgroundColor == "green" ? "orangered" : "green"; 
    }
})


window.addEventListener("mouseover", (event)=>{ // Função dispara quando o mouse passa por cima do elemento da classe BOX
    if(event.target.classList.value == "box"){
        event.target.style.border = "2px solid white";
    }
})

window.addEventListener("mouseout", (event)=>{ // Função dispara quando o mouse sair de cima do elemento da classe BOX
    if(event.target.classList.value == "box"){
        event.target.style.border = "2px solid black";
    }
})


