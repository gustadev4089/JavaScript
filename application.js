let menu = document.getElementsByTagName("aside"); // Pegando todos da classe box


window.addEventListener("click", (event)=>{
    if(event.target.classList == "button-close"){
        const styles = getComputedStyle(menu[0]);
        menu[0].style.left = styles.left == "-120px" ? "0" : "-120px";
    }
})
