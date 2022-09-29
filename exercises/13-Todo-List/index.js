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
function query(selector, context) {
    context = context || document;
    // Redirect simple selectors to the more performant function
    if (/^(#?[\w-]+|\.[\w-.]+)$/.test(selector)) {
        switch (selector.charAt(0)) {
            case '#':
                // Handle ID-based selectors
                return [context.getElementById(selector.substr(1))];
            case '.':
                // Handle class-based selectors
                // Query by multiple classes by converting the selector 
                // string into single spaced class names
                var classes = selector.substr(1).replace(/\./g, ' ');
                return [].slice.call(context.getElementsByClassName(classes));
            default:
                // Handle tag-based selectors
                return [].slice.call(context.getElementsByTagName(selector));
        }
    }
    // Default to `querySelectorAll`
    return [].slice.call(context.querySelectorAll(selector));
}
window.onload = eschuchaI()
