

let elements = document.querySelectorAll("p");

elements.forEach((element, index)=>{
    element.innerHTML += " "+(index+1);
})
