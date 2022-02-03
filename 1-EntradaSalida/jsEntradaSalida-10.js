/*
nombre: Ramirez Franco
e/s ej n°10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	let importeActual ; // define una variable
	let importeConDescuento ; // define una variable
	let descuento; // define una variable

	descuento = 25

	importeActual = document.getElementById('txtIdImporte').value ; //ingresa datos de usuario en la variable

	importeActual = parseInt(importeActual); // "parsea" el ID

	importeConDescuento = (importeActual*(100-descuento)/100); // aplica un descuento del 25%

	document.getElementById('txtIdResultado').value = importeConDescuento; // muestra el valor con el aumento aplicado

}

