/*
nombre: Ramirez Franco
Ej Nº 6 Instrucción IF

Al ingresar una edad debemos informar si la persona es
   mayor de edad (mas de 18 años) o 
   adolescente (entre 13 y 17 años) o 
   niño (menor a 13 años).
	
*/
function mostrar()
/*Propósito: indicar en pantalla si la edad ingresada corresponde a la ninez, adolescencia o adultez.
  Precondición: El valor ingresado debe ser de tipo número y debe ser mayor a cero.
  Variables: 
	*edadIngresada* describe un valor ingresado por el usuario en el cuadro de texto.
	*esAdolescente* denota un valor de verdad
	*esNiño* denota un valor de verdad
	
*/
{
	//tomo la edad  
	let edadIngresada;
	let esAdolescente;
	let esNiño;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	
	esAdolescente = edadIngresada > 12 && edadIngresada < 18;
	esNiño = edadIngresada > 0 && edadIngresada < 13;
		
	
	if(esNiño)
	{
		alert("Su edad es: "+edadIngresada+" años,  eres un/a niño/a");
	}
	else 
	{	if(esAdolescente) 
		{
			alert("Su edad es: "+edadIngresada+" años,  eres un/a adolescente");		
		}
		else 
		{
			alert("Su edad es: "+edadIngresada+" años,  eres un/a adulto/a ");	
		}	
		
	}
}//FIN DE LA FUNCIÓN