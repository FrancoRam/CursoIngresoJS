/*
nombre: Ramirez Franco
Ejercicio N°9

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes,
 se cobra $15.000 por cada estadia como base, 
 se pide el ingreso de una estacion del año y localidad 
 para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 
10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada; 
	var destinoIngresado;
	let mensaje;
	let porcentaje;
	let totalConImpuestos;


	estacionIngresada= document.getElementById('txtIdEstacion').value;
	destinoIngresado = document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 20;
				break;

				case "Mar del plata":
					porcentaje = -20;
				break;

				case "Cordoba":
					porcentaje = -10;
				break;

				case "Cataratas":
					porcentaje = -10;
				break;
			}
		break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = -20;
				break;

				case "Mar del plata":
					porcentaje = 20;
				break;

				case "Cordoba":
					porcentaje = 10;
				break;

				case "Cataratas":
					porcentaje = 10;
				break;
			}
		break;

		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 10;
				break;

				case "Mar del plata":
					porcentaje = 10;
				break;

				case "Cordoba":
					porcentaje = 0;
				break;

				case "Cataratas":
					porcentaje = 10;
				break;
			}
		break;
	}

	 totalConImpuestos = 15000 * porcentaje/100;
	 totalConImpuestos = 15000 + totalConImpuestos;


	alert("Su estación y destino se han fijado, su total a abonar es: "+"$"+totalConImpuestos);

}//FIN DE LA FUNCIÓN