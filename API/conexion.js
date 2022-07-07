
let mostrarDatos = () => {
    fetch("https://pokeapi.co/api/v2/version/").then(response => response.json())
    .then(data => {
        let ul =document.getElementById("lista")
        for (game of data.results){
            let li = document.createElement("li")
            li.appendChild(document.createTextNode(game.name))
            ul.appendChild(li)
        }
    })
    .catch(console.error)
}
mostrarDatos()


let pokesGen = () => {
    fetch("https://pokeapi.co/api/v2/generation/").then(response => response.json())
    .then(data => {
        let tb =document.getElementById("tabla")
        for (gen of data.results){
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 =document.createElement("td")
            td1.innerHTML = gen.name
            fetch(gen.url).then(response => response.json())
            .then(data => {
                let value = data.pokemon_species.length
                td2.innerHTML = value
            })
            .catch(console.error)
            tr.appendChild(td1)
            tr.appendChild(td2)  
            tb.appendChild(tr)
        }
    })
    .catch(console.error)
}
pokesGen()


let gamesGen = () => {
    fetch("https://pokeapi.co/api/v2/generation/").then(response => response.json())
    .then(data => {
        let tb =document.getElementById("tabla1")
        for (gen of data.results){
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 =document.createElement("td")
            td1.innerHTML = gen.name
            fetch(gen.url).then(response => response.json())
            .then(data => {
                let games = data.version_groups
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
            })
            .catch(console.error)
            tr.appendChild(td1)
            tr.appendChild(td2)  
            tb.appendChild(tr)
        }
    })
    .catch(console.error)
}
gamesGen()

let pokesGender = () => {
    fetch("https://pokeapi.co/api/v2/gender/").then(response => response.json())
    .then(data => {
        let tb =document.getElementById("tabla2")
        let size = 0
        for (gender of data.results){
            let tr = document.createElement("tr")
            let td1 = document.createElement("td")
            let td2 =document.createElement("td")
            td1.innerHTML = gender.name
            fetch(gender.url).then(response => response.json())
            .then(data => {
                let value = data.pokemon_species_details.length
                td2.innerHTML = value
            })
            .catch(console.error)
            tr.appendChild(td1)
            tr.appendChild(td2).classList.add("size")
            tb.appendChild(tr)
        }
    })
    .catch(console.error)
}
pokesGender()