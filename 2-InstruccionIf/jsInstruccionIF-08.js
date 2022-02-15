

/*
nombre: Ramirez Franco
Ej Nº 8 Instrucción IF

Al ingresar una edad menor a 18 años y un estado civil distinto 
a "Soltero", NO HACER NADA, pero si no es asi, y es soltero 
y no es menor, mostrar el siguiente mensaje:
 'Es soltero y no es menor.'
*/
function mostrar()
/*Propósito: indica en pantalla si la edad ingresada corresponde a una 
		     persona mayor y soltera. En otro caso, no muestra nada.
  Variables: 
	*edadIngresada* describe un valor ingresado por el usuario en el cuadro de texto.
	*estadoCivil*	el usuario denota un estado civil en el cuadro de texto.
 */
{
	//tomo la edad  
	let edadIngresada;
	let estadoCivil;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	
	estadoCivil = document.getElementById('estadoCivil').value;
	
	if(estadoCivil == "Soltero" && edadIngresada > 17)
	{
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN