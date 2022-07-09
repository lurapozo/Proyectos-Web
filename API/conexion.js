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
        cargarPokes()
        pokesGen()
        juegosGen()
        genero()
        pokesColor()
        pokesType()
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

async function pokesColor() {
    let pokesColor = await conexion("https://pokeapi.co/api/v2/pokemon-color")
    let tb = document.getElementById("tabla3")
    for (color of pokesColor.results) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 =document.createElement("td")
        td1.innerHTML = color.name
        let colorData = await conexion(color.url)
        td2.innerHTML = colorData.pokemon_species.length
        tr.appendChild(td1)
        tr.appendChild(td2)  
        tb.appendChild(tr)   
    }
}

async function pokesType() {
    let pokesType = await conexion("https://pokeapi.co/api/v2/type")
    let tb = document.getElementById("tabla4")
    for (type of pokesType.results) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 =document.createElement("td")
        td1.innerHTML = type.name
        let typeData = await conexion(type.url)

        td2.innerHTML = typeData.pokemon.length
        tr.appendChild(td1)
        tr.appendChild(td2)  
        tb.appendChild(tr)   
    }
}

async function cargarPokes() {
    let pokes = await conexion("https://pokeapi.co/api/v2/pokemon/")
    for (let poke of pokes.results){
        let plantilla =  `<option value = ${poke.name}>${poke.name}</option>`
        document.querySelector('select').innerHTML += plantilla
    }
}


const selectElement = document.querySelector('select')
selectElement.addEventListener('change', (event) => {
    let selection = document.querySelector('div.input-group > select')
    let textOption = selection.options[selection.selectedIndex].text

    mostrarDatos(textOption)
});

async function mostrarDatos(text) {
    let poke = await conexion(`https://pokeapi.co/api/v2/pokemon/${text}`)
    let tb = document.getElementById("tabla5")
    tb.innerHTML = `        <tr>
    <th>Type</th>
    <th>Fuerte contra</th>
    <th>Debil contra</th>
    <th>Resistente contra</th>
</tr>`
    for (type of poke.types){
        let typeName = type.type.name
        let typePage = await conexion(type.type.url)
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerHTML = typeName
        let tdFuerte =document.createElement("td")
        let tdDebil =document.createElement("td")
        let tdResist =document.createElement("td")

        let ulF=document.createElement('ul');
        let ulD=document.createElement('ul');
        let ulR=document.createElement('ul');


        for (double of typePage.damage_relations.double_damage_to){
            let li=document.createElement('li')
            li.innerHTML = double.name
            ulF.appendChild(li)
        }
        for (double of typePage.damage_relations.double_damage_from){
            let li=document.createElement('li')
            li.innerHTML = double.name
            ulD.appendChild(li)
        }
        for (double of typePage.damage_relations.half_damage_from){
            let li=document.createElement('li')
            li.innerHTML = double.name
            ulR.appendChild(li)
        }
        tdFuerte.appendChild(ulF)
        tdDebil.appendChild(ulD)
        tdResist.appendChild(ulR)
        tr.appendChild(td1)
        tr.appendChild(tdFuerte)
        tr.appendChild(tdDebil)
        tr.appendChild(tdResist)
        tb.appendChild(tr)

    }
}