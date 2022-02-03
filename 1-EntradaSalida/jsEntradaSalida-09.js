/*
nombre: Ramirez Franco
e/s ej N°9 BIS
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
function mostrarAumento()
{

	let sueldoActual ; // define una variable
	let sueldoConAumento ; // define una variable
	let incremento; //def. una variable

	incremento = 20
	sueldoActual = document.getElementById('txtIdSueldo').value ; //ingresa datos de usuario en la variable

	sueldoActual = parseInt(sueldoActual); // "parsea" el ID

	sueldoConAumento = (sueldoActual/100 *incremento)+ sueldoActual ; // incrementa el sueldo acutal en un 10 %

	document.getElementById('txtIdResultado').value = sueldoConAumento; // muestra el valor con el aumento aplicado

} /*




/*
nombre: Ramirez Franco
e/s ej N°9 BIS
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldoActual ; // define una variable
	let sueldoConAumento ; // define una variable
	let incremento; //def. una variable

	incremento = prompt("aumentar el sueldo en un:", "escriba su porcentaje porcentaje")
	sueldoActual = document.getElementById('txtIdSueldo').value ; //ingresa datos de usuario en la variable

	sueldoActual = parseInt(sueldoActual); // "parsea" el ID

	sueldoConAumento = (sueldoActual/100 *incremento)+ sueldoActual ; // incrementa el sueldo acutal en un 10 %

	document.getElementById('txtIdResultado').value = sueldoConAumento; // muestra el valor co"n el aumento aplicado


}













