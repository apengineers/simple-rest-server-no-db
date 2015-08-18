
var b = document.getElementsByTagName("form");
var c = document.getElementById("submit");
c.addEventListener("click", stopDefAction);
function stopDefAction(evt)
 {
 	document.getElementById("new").innerHTML= " ";
    evt.preventDefault();
	for(var i = 1; i<b[0].length; i++)
	{	
		var a = b[0];
		//var a = document.getElementsByTagName("form");
		var d = document.getElementById("new")
		d.innerHTML  = d.innerHTML + " <br/>" + a[i-1].name + " " + a[i-1].value;
	};	
	//d.innerHTML = d.innerHTML + " <br/>" + document.getElementById("state").name + document.getElementById("state").value;
};
//document.getElementById("new").innerHTML= " "