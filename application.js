
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");


let opt1 = document.querySelector("#option1");
let opt2 = document.querySelector("#option2");
let opt3 = document.querySelector("#option3");


window.addEventListener("mouseover", (event)=>{
    if(event.target.id == "option1"){
        img1.style.opacity = 1;
        img2.style.opacity = 0;
        img3.style.opacity = 0;

        opt1.style.backgroundColor = "rgb(61, 59, 59)";
        opt2.style.backgroundColor = "dimgrey";
        opt3.style.backgroundColor = "dimgrey";
    }else if(event.target.id == "option2"){
        img1.style.opacity = 0;
        img2.style.opacity = 1;
        img3.style.opacity = 0;

        opt1.style.backgroundColor = "dimgrey";
        opt2.style.backgroundColor = "rgb(61, 59, 59)";
        opt3.style.backgroundColor = "dimgrey";
    }else if(event.target.id == "option3"){
        img1.style.opacity = 0;
        img2.style.opacity = 0;
        img3.style.opacity = 1;

        opt1.style.backgroundColor = "dimgrey";
        opt2.style.backgroundColor = "dimgrey";
        opt3.style.backgroundColor = "rgb(61, 59, 59)";
    }
})