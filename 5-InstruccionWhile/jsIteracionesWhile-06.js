/*
nombre:Ramirez Franco
Ej nº6 Sentencia while

Enunciado:
Al presionar el botón pedir 
5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	//numeroIngresado = prompt("ingrese un número","..."); // SI INICIALIZA ACÁ MUESTRA EL MENSAJE 6 VECES EN VEZ DE 5, COMO DEBERÍA
	//numeroIngresado = parseInt(numeroIngresado);		   // SI INICIALIZA ACÁ MUESTRA EL MENSAJE 6 VECES EN VEZ DE 5, COMO DEBERÍA

	while(contador < 5)
	{
		contador = contador + 1;
		numeroIngresado = prompt("ingrese un número","...");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
	}
	
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN
