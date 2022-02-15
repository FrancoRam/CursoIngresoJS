/*
nombre: Ramirez Franco
Ej Nº 7 InstrucciónIf

Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' 
*/

function mostrar()
{
	//tomo la edad  
	let edadIngresada;
	let noEsSoltero;
	let estadoCivil;
	let menorYSinSolteria;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	
	estadoCivil = document.getElementById('estadoCivil').value;

	noEsSoltero = (estadoCivil == "Divorciado") || (estadoCivil == "Casado");
	
	menorYSinSolteria = noEsSoltero && edadIngresada < 18; 
	
	if(menorYSinSolteria)
	{
		alert("Es muy pequeño para NO ser soltero.");
	}


}//FIN DE LA FUNCIÓN