const addTask = textoInput =>{
    //alert("Crear elemento")
    let ul = document.querySelector("ul")
	let li = document.createElement("li")
	let span = document.createElement("span")
	let i = document.createElement("i")
	i.setAttribute("class", "fa fa-trash")
	ul.appendChild(li) //metemos li dentro de ul
	li.appendChild(span) //metemos span dentro de li
	span.appendChild(i) // metemos i dentro de span
	li.appendChild(document.createTextNode(textoInput)) //metemos el texto en li
	eschuchaI() // funcion que escucha los <i>
	
}
// crear el elemento
const INPUT = document.querySelector("input")
INPUT.addEventListener("keyup", pulsaEnter => {
    if (pulsaEnter.key === 'Enter') { //si pulsamos Enter al cambiar el texto del input
        addTask(INPUT.value) //añado elemento a la lista	
    }
})

// escuchar los <i>
const eschuchaI = () =>{

    const btsPapelera = document.querySelectorAll('i') //selecciono todos los <i>
    
    for (const boton of btsPapelera) { // recorro btsPapelera
        boton.addEventListener('click', function(event) { 
            this.parentNode.parentNode.remove(); //borro el padre del padre del <i>      
        })
    }
    
}
window.onload = eschuchaI()
