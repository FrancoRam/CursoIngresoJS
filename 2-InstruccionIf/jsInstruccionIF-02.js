/*
	nombre: Ramirez Franco
	If Ej n°2
*/


function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17)
	{
		alert("Su edad es: "+edadIngresada+", eres mayor de edad");
	}

}//FIN DE LA FUNCIÓN	