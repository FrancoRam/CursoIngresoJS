/*
nombre: Ramirez Franco
Ejercicio N°7

Enunciado:
Al selecionar un destino , indicar el punto 
cardinal de nuestro pais en donde se encuentra
Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destinoIngresado;
	let mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="Dirección Oeste";
		break;

		case "Cataratas":
			mensaje="Dirección Este";
		break;

		case "Mar del plata":
			mensaje="Dirección Norte";
		break;

		case "Ushuaia":
			mensaje="Dirección Dirección Sur";
		break;

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN