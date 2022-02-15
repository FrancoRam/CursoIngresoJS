/*
	nombre: Ramirez Franco
	Ej N°10 InstrucciónIf

Al presionar el botón, 
asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10) + 1;

	if(numeroRandom> 8 && numeroRandom< 11)	//notas entre 9 y 10 (inclusive)
	{
		alert("Su nota es: "+numeroRandom+" EXCELENTE");
	}
	else 
	{	if(numeroRandom> 3 && numeroRandom< 11)	//notas entre 4 y 8 (inclusive)
		{
			alert("Su nota es: "+numeroRandom+ " APROBADO");
		}
		else 
		{
			alert("Su nota es: "+numeroRandom+" Vamos, la próxima se puede");	//notas menores a 4 puntos
		}	
		
	}
}//FIN DE LA FUNCIÓN
