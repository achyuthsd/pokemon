const input = document.getElementById("inp")
const btn = document.getElementById("btn")
const img = document.getElementById("img")
const h1 = document.getElementById("h1")
let pokename;

async function f2(){

    let poke = Math.floor(Math.random() * 1025);
    
        const r1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const r2 = await r1.json()
        console.log(r2)
        const i = r2.sprites.front_default
        img.src=i
        pokename=r2.name
    
    
    
    
    }



f2()

btn.addEventListener("click",function f1(){
    let guess = input.value
    if(guess == pokename){
        h1.innerHTML="correct"
        h1.style.color = "rgb(34, 255, 0)"}
    else{
        h1.innerHTML="wrong"
            h1.style.color = "rgb(255, 0, 0)"
    }
})

