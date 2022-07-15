(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);

async function conexion(url) {
    const response = await fetch(url)
    const juegos = await response.json()
    return juegos
}

document.addEventListener("DOMContentLoaded", async () => {
    try{
        juegosGen()
        genero()
        pokesColor()
        pokesType()
        cargarPokes()
    } catch(e){
        console.log(e)
    }
})
async function pokesType() {
    let pokesType = await conexion("https://pokeapi.co/api/v2/type")
    let arrayTipos=[]
    let arrayCantidad=[]
    for (type of pokesType.results) {
        arrayTipos.push(type.name)
        let typeData = await conexion(type.url)
        arrayCantidad.push(typeData.pokemon.length)
        if(type.name=="grass"){
            break
        }
    }

        // Single Bar Chart 2
        var ctx2 = $("#bar-chart2").get(0).getContext("2d");
        var myChart2 = new Chart(ctx2, {
            type: "bar",
            data: {
                labels: arrayTipos,
                datasets: [{
                    label: "Tipos",
                    backgroundColor: [
                        "rgba(40, 156, 255)",
                        "rgba(60, 156, 255, .9)",
                        "rgba(80, 156, 255, .8)",
                        "rgba(100, 156, 255, .7)",
                        "rgba(120, 156, 255, .7)",
                        "rgba(155, 156, 255, .7)",
                        "rgba(155, 156, 255, .7)",
                        "rgba(155, 156, 255, .8)",
                        "rgba(155, 156, 255, .9)",
                        "rgba(180, 156, 255, .9)",
                        "rgba(200, 156, 255, .9)",
                        "rgba(220, 156, 255, .9)",

                    ],
                    data: arrayCantidad
                }]
            },
            options: {
                responsive: true
            }
        });
}
async function genero(){
    let pokesGender = await conexion("https://pokeapi.co/api/v2/gender/")

    let arrayNombres=[]
    let arrayCantidad=[]
    for (gender of pokesGender.results){
        arrayNombres.push(gender.name) 
        let genderCant = await conexion(gender.url)
        let value = genderCant.pokemon_species_details.length
        arrayCantidad.push(value) 
    }


    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: arrayNombres,
            datasets: [{
                backgroundColor: [
                    "rgba(255,27,141, .5)",
                    "rgba(27, 179, 255, .5)",
                    "rgba(255,217,0, .5)"
                ],
                data: arrayCantidad
            }]
        },
        options: {
            responsive: true
        }
    });
}

async function juegosGen() {
    let gamesGen = await conexion("https://pokeapi.co/api/v2/generation/")
    let arrayNombres=[]
    let arrayCantidad=[]
    for (gen of gamesGen.results){
        arrayNombres.push(gen.name)
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
        arrayCantidad.push(cant) 
    }

    var ctx3 = $("#line-chart").get(0).getContext("2d");
    if (myChart3) {
        myChart3.destroy();
    }
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: arrayNombres,
            datasets: [{
                label: "Juegos",
                fill: true,
                backgroundColor: "rgba(0, 156, 255, .3)",
                data: arrayCantidad
            }]
        },
        options: {
            responsive: true
        }
    });
}

async function pokesColor() {
    let pokesColor = await conexion("https://pokeapi.co/api/v2/pokemon-color")
    let arrayColores=[]
    let arrayCantidad=[]
    for (color of pokesColor.results) {
        arrayColores.push(color.name)
        let colorData = await conexion(color.url)
        arrayCantidad.push(colorData.pokemon_species.length)
    }

// Single Bar Chart
var ctx4 = $("#bar-chart").get(0).getContext("2d");
var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
        labels: arrayColores,
        datasets: [{
            label: "Colores",
            backgroundColor: [
                "rgba(0, 0, 0, .6)",
                "rgba(0, 0, 255, .6)",
                "rgba(225, 193, 110, .8)",
                "rgba(220,220,220, .9)",
                "rgba(0, 255, 0, .4)",
                "rgba(159, 43, 104, .7)",
                "rgba(155, 156, 255, .7)",
                "rgba(255, 0, 0, .6)",
                "rgba(240,255,240)",
                "rgba(253, 218, 13, .7)",
            ],
            data: arrayCantidad
        }]
    },
    options: {
        responsive: true
    }
});
}

const selectElement = document.querySelector('select')
selectElement.addEventListener('change', (event) => {
    let selection = document.querySelector('div.input-group > select')
    let textOption = selection.options[selection.selectedIndex].text

    mostrarDatos(textOption)
});

async function cargarPokes() {
    let pokes = await conexion("https://pokeapi.co/api/v2/pokemon/")
    for (let poke of pokes.results){
        let plantilla =  `<option value = ${poke.name}>${poke.name}</option>`
        document.querySelector('select').innerHTML += plantilla
    }
}

async function mostrarDatos(text) {
    let poke = await conexion(`https://pokeapi.co/api/v2/pokemon/${text}`)
    let tb = document.getElementById("tabla5")
    tb.innerHTML = ""
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