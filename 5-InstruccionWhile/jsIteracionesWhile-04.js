
/*
nombre:Ramirez Franco
Ej nº4 Sentencia while

Enunciado:
Al presionar el botón pedir un número entre 0 y 9 inclusive. 
*/

function mostrar() // ACÁ ASIGNAR EL NOMBRE DE FUNCIÓN CORRECTA
{
	let númeroIngresado;
	númeroIngresado = prompt("ingresa un  número entre 0 y 9 (inclusives).");

	while(númeroIngresado<0 || númeroIngresado>9 )
	{
		númeroIngresado = prompt("número no válido, ingresa un  número entre 0 y 9 Incl.");	
	
	}
	document.getElementById('txtIdNumero').value = númeroIngresado;
	alert("bien hecho, el número ingresado es el "+númeroIngresado);
}
