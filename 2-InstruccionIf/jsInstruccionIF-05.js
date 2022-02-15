/*
	nombre: Ramirez Franco
	If Ej n°5
*/


function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada < 13)
	{
		alert("Su edad es: "+edadIngresada+" años, no eres adolescente");
	}
	if(edadIngresada > 17)
	{
		alert("Su edad es: "+edadIngresada+" años, no eres adolescente");
	}

}//FIN DE LA FUNCIÓN	

/*

function mostrar()
{
	//tomo la edad  
	/*	
	Al ingresar una edad solo debemos 
	informar si la persona
					NO es adolescente.
	*/
	if(edadIngresada<13)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");	
	}
	if(edadIngresada>17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	


	//bien if(edadIngresada<13 || edadIngresada>17)
	if(!(edadIngresada>12 && edadIngresada<18))
	//error if(edadIngresada>13 || edadIngresada<17)// todos
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	


	if(edadIngresada>12 && edadIngresada<18)
	{

	}else
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}	

	if(edadIngresada<13 || edadIngresada>17)
	{
		alert("su edad es "+edadIngresada+" y usted es NO adolescente");
	}
*/
//FIN DE LA FUNCIÓN


