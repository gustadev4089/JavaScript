let title = document.querySelector("h2");

title.innerHTML = "Carregando ..."

window.addEventListener("load", async()=>{


    const users = 30;

    for(let c=1; c <= users; c++){
        await fetch(`https://jsonplaceholder.typicode.com/todos/${c}`)
        .then((response) => response.json())
        .then((json) => console.log(json))
    }

    console.log("Finished !!!");


    await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify({
            title: "Gustavo Dankicode",
            body: "asmapsmas aspk aspk asa spaspasl,asa",
            userID: 11,
            id: 101
        }),
        headers:{
            "Content-type": "application/json, charset=UTF-8",
        }
    })
    .then((response)=> response.json())
    .then((json)=> console.log(json))

})


