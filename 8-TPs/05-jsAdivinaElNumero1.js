/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar 
al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 0;


function verificar()
{
	let númeroIngresado;
	let cantidadFaltante;
	let cantidadSobrante;

	númeroIngresado = document.getElementById('txtIdNumero').value;
	númeroIngresado = parseInt(númeroIngresado);
	contadorIntentos = contadorIntentos + 1;

	 cantidadSobrante =   númeroIngresado-numeroSecreto;
	 cantidadFaltante =  numeroSecreto - númeroIngresado ;


	if (numeroSecreto == númeroIngresado)
	{	
		alert("Usted es un ganador!!! y en solo " +contadorIntentos+ " intentos.");
		contadorIntentos = 0;
	}
	else
	{
		if (numeroSecreto < númeroIngresado)
		{
			alert("Se pasó en "+cantidadSobrante+" para llegar al número secreto");
		}
		else
		{
			alert("falta… "+cantidadFaltante+" para llegar al número secreto");

		}
	}
	document.getElementById('txtIdIntentos').value = contadorIntentos;
}

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
}

