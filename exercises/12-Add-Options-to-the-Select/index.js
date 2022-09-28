let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
let INPUT = document.getElementById("mySelect");
INPUT.addEventListener("change", function() {
	//your code here
    alert("cambia");
	var option = document.createElement("option");
  	option.appendChild(document.createTextNode("Four"));
  	option.setAttribute("value", "Hoo"); // added line
  	INPUT.appendChild(option);
	
});