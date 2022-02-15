/*
nombre: Ramirez Franco
Ejercicio N°8

Enunciado:
Al seleccionar un destino informar si 
hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje="En este destino hace FRÍO!";
		break;
		default:
			mensaje="En este destino hace CALOR!";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN