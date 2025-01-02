let title = document.querySelector("h2");

title.innerHTML = "Carregando ..."

window.addEventListener("load", async()=>{
    // requisição
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    
    request.onload = function(){
        if(this.status >= 200 && this.status <= 400){
            title.innerHTML = this.response;
        }else{
            alert(`error --> ${this.status}`)
        }
    }

    request.send();

})
