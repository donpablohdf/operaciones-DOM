// Your code here


const deleteTask = elemento =>{
 alert("hols")
}
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
// borrar el elemento


const eschuchaI = () =>{
	let losI =document.querySelectorAll("i")
	console.clear()
	console.log(losI)
	
	Object.keys(losI).forEach(key => {
		
		//console.log("onclick" in losI[key] )
		losI[key].onclick = this.addEventListener("click", deleteTask())
		//losI[key].onmouseup= deleteTask()
	})
	
}
window.onload = eschuchaI()
