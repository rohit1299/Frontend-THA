
const button = document.querySelector("button")
const meme = document.getElementById("meme")

let parentDiv = document.createElement('div')
button.addEventListener('click', ()=>{
    console.log("works");
    fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => res.json())
    .then(data => {
        meme.innerHTML = `<img src="${data.url}"/>`
    }
    )
})

