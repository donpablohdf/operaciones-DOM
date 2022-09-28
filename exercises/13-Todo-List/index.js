// Your code here
const deleteTask = () =>{

}
const addTask = (valor) =>{
    alert("Crear elemento")
    let ul = document.querySelector("ul")
	let li = document.createElement("li")
	let span = document.createElement("span")
	let i = document.createElement("i")
	i.setAttribute("class", "fa fa-trash")
	ul.appendChild(li) //metemos li dentro de ul
	li.appendChild(span) //metemos span dentro de li
	span.appendChild(i) // metemos i dentro de span
	li.appendChild(document.createTextNode(valor)) //metemos el texto en li
}
let INPUT = document.querySelector("input")
INPUT.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') { //si pulsamos enter al cambiar el texto del input
        addTask(INPUT.value);
    }
})