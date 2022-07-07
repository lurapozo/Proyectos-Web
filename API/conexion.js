async function conexion(url) {
    const response = await fetch(url)
    const juegos = await response.json()
    return juegos
}

document.addEventListener("DOMContentLoaded", async () => {
    try{
        //listar juegos
        let juegos = await conexion("https://pokeapi.co/api/v2/version/")
        let ul =document.getElementById("lista")
        for (game of juegos.results){
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(game.name))
            ul.appendChild(li)
        }
        pokesGen()
        juegosGen()
        genero()

    } catch(e){
        console.log(e)
    }
})

async function genero(){
    let pokesGender = await conexion("https://pokeapi.co/api/v2/gender/")
    let tb2 =document.getElementById("tabla2")
    let size = 0
    for (gender of pokesGender.results){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 =document.createElement("td")
        td1.innerHTML = gender.name
        let genderCant = await conexion(gender.url)
        let value = genderCant.pokemon_species_details.length
        td2.innerHTML = value
        tr.appendChild(td1)
        tr.appendChild(td2).classList.add("size")
        tb2.appendChild(tr)
    }
}

async function juegosGen() {
    let gamesGen = await conexion("https://pokeapi.co/api/v2/generation/")
    let tb1 =document.getElementById("tabla1")
    for (gen of gamesGen.results){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 =document.createElement("td")
        td1.innerHTML = gen.name
        let gamesGenLen = await conexion(gen.url)
        let games = gamesGenLen.version_groups
        let cant = 0
        for (game of games){
            if (game.name.includes("the") || game.name.includes("legends")){
                cant += 1
            }
            else if (game.name.includes("-")){
                cant += 2
            }
            else{
                cant+=1
            }
        }
        td2.innerHTML = cant 
    
        tr.appendChild(td1)
        tr.appendChild(td2)  
        tb1.appendChild(tr)
    }
}

async function pokesGen() {
    let pokesGen = await conexion("https://pokeapi.co/api/v2/generation/")
    let tb =document.getElementById("tabla")
    for (gen of pokesGen.results){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 =document.createElement("td")
        td1.innerHTML = gen.name
        let pokesGenLen = await conexion(gen.url)
        td2.innerHTML = pokesGenLen.pokemon_species.length
        tr.appendChild(td1)
        tr.appendChild(td2)  
        tb.appendChild(tr)
    }
}