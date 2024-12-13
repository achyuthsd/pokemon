const input = document.getElementById("inp")
const btn = document.getElementById("ok")
const img = document.getElementById("img")
const h1 = document.getElementById("h1")
const s = document.getElementById("score")
const n = document.getElementById("next")
let pokename;
let oink
async function f2(){

    let poke = Math.floor(Math.random() * 1024);
    
        const r1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const r2 = await r1.json()
        console.log(r2)
        const i = r2.sprites.front_default
        img.src=i
        pokename=r2.name
    oink=true
    
    
    
    }



f2()

n.addEventListener("click",async function f3(){

    let poke = Math.floor(Math.random() * 1024);
    
        const r1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        const r2 = await r1.json()
        console.log(r2)
        const i = r2.sprites.front_default
        img.src=i
        pokename=r2.name
    
    oink=true
    h1.innerHTML=""
    
    })


let score=0
btn.addEventListener("click",function f1(){
    let guess = input.value
    if(guess == pokename){
        h1.innerHTML="Correct"
        if(oink){
        score=score+10;
        s.innerHTML=`Score: ${score}`
    oink=false    
    }
        h1.style.color = "rgb(34, 255, 0)"}
    else{
        h1.innerHTML=`Wrong (Name: ${pokename})`
           score=0;
        s.innerHTML=`Score: ${score}`
            h1.style.color = "rgb(255, 0, 0)"
    }
})



