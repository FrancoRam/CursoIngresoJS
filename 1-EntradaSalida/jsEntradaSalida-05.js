/*
nombre: Ramirez Franco
e/s ej: n°5


Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {

	let nombreIngresado;
	let edadIngresada;

		nombreIngresado = document.getElementById('txtIdNombre').value ;	
		edadIngresada = document.getElementById('txtIdEdad').value ;

	alert("su nombre ingresado es: " + nombreIngresado + "y su edad es: " + edadIngresada);	
}
