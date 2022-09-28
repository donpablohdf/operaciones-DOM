let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
let INPUT = document.getElementById("mySelect");
INPUT.addEventListener("change", function() {
	//your code here
   countries.forEach(function(pais){
		var option = document.createElement("option");
		option.appendChild(document.createTextNode(pais));
		option.setAttribute("value", pais); // added line
		INPUT.appendChild(option);
	})
	
});