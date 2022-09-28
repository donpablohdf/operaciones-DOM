let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let ul = document.querySelector('#myList');
	var li = document.createElement("li");
  	li.appendChild(document.createTextNode("Four"));
  	li.setAttribute("id", "element4"); // added line
  	ul.appendChild(li);
	
});
