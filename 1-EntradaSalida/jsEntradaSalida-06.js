/*
nombre: Ramirez Franco
e/s Ej n° 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primerNúmeroASumar;	 // ..
	let segundoNúmeroASumar; // inicializo variables
	let resultado;			 // ..

		primerNúmeroASumar = document.getElementById('txtIdNumeroUno').value  ; // la variable toma un valor numérico
		segundoNúmeroASumar = document.getElementById('txtIdNumeroDos').value  ; // la variable toma un valor numérico

		resultado = parseInt(primerNúmeroASumar) + parseInt(segundoNúmeroASumar) ; // se suman ámbas variables de tipo número
	alert( "la suma es:"+ resultado); // crea un alert del resultado de la operación

}

