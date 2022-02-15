/*
	nombre: Ramirez Franco
	If Ej n°4
*/


function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada < 18)
	{
		if (edadIngresada > 12) 
		{
			alert("Su edad es: "+edadIngresada+" años, eres adolescente");
		}
	}
else
	{
		alert("Su edad es: "+edadIngresada+" años, no eres adolescente");
	}

}//FIN DE LA FUNCIÓN	


/*function mostrar()
{
	//tomo la edad  
	if(edadIngresada>12)
	{
		if(edadIngresada<18)
		{
			alert("su edad es "+edadIngresada+" y usted es adolescente");
		}	
	}

	if(edadIngresada>12 && edadIngresada<18)
	//error if(edadIngresada<12 && edadIngresada>18)// no hay edad
	{
		alert("su edad es "+edadIngresada+" y usted es adolescente");
	}	
	
	//error 
	if(edadIngresada>12 && /*aca va algo*/<18)
	{
		alert("su edad es "+edadIngresada+" y usted es adolescente");
	}	


}//FIN DE LA FUNCIÓN
*/