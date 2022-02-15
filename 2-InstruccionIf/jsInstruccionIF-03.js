/*
	nombre: Ramirez Franco
	If Ej n°3
*/


function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada > 17)
	{
		alert("Su edad es: "+edadIngresada+" años, eres mayor de edad");
	}

	if(edadIngresada < 18)
	{
		alert("Su edad es: "+edadIngresada+" años, no eres mayor de edad");
	}

}//FIN DE LA FUNCIÓN	