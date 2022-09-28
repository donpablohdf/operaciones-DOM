let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let elem = document.createElement("div");
	elem.style.background="yellow"
	elem.innerHTML = "Hello World";
	document.body.appendChild(elem);	
});