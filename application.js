let menu = document.getElementsByTagName("aside"); // Pegando todos da classe box
let div_content = document.getElementsByClassName("content");
let header_span = document.querySelector("section div.header span");
let div_content_p = document.querySelector("section div.content p");

window.addEventListener("click", (event)=>{
    if(event.target.classList == "button-close"){
        const styles_menu = getComputedStyle(menu[0]);
        
        menu[0].style.left = styles_menu.left == "-120px" ? "0" : "-120px";
        div_content[0].style.width = styles_menu.left == "-120px" ? "60%" : "76%"
        div_content[0].style.paddingLeft = styles_menu.left == "-120px" ? "100px" : "0";
    }

    if(event.target.id == "see-more"){
        const div_content_style = getComputedStyle(div_content_p);

        div_content_p.style.height = div_content_style.height == "10px" ? "200px" : "10px";
    }
})
