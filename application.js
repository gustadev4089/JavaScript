
function running(){
    this.isRunning = false;
    this.nome = "Gustavo"

    this.show = ()=>{
        console.log(this)
    }
}


window.addEventListener("load", ()=>{
    let start = new running();

    start.nome = "Guilherme"
    start.isRunning = true
    start.show();
})