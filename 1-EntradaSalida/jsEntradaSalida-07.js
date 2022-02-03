/*
nombre: Franco Ramirez
e/s ej n°7

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primerNúmero
	let segundoNúmero
	let resultado

	primerNúmero = document.getElementById('txtIdNumeroUno').value ;
	segundoNúmero = document.getElementById('txtIdNumeroDos').value ;
	resultado = (parseInt(primerNúmero) + parseInt(segundoNúmero) );

	alert("la Suma es:  " + resultado );	
}

function restar()
{
	let primerNúmero
	let segundoNúmero
	let resultado

	primerNúmero = document.getElementById('txtIdNumeroUno').value ;
	segundoNúmero = document.getElementById('txtIdNumeroDos').value ;
	resultado = (parseInt(primerNúmero) - parseInt(segundoNúmero) );

	alert("la Resta es:  "+ resultado );
	
}

function multiplicar()
{ 
	let primerNúmero
	let segundoNúmero
	let resultado

	primerNúmero = document.getElementById('txtIdNumeroUno').value ;
	segundoNúmero = document.getElementById('txtIdNumeroDos').value ;
	resultado = (parseInt(primerNúmero) * parseInt(segundoNúmero) );

	alert("la Multiplicación es:  "+ resultado );
	
}

function dividir()
{
	let primerNúmero
	let segundoNúmero
	let resultado

	primerNúmero = document.getElementById('txtIdNumeroUno').value ;
	segundoNúmero = document.getElementById('txtIdNumeroDos').value ;
	resultado = (parseInt(primerNúmero) / parseInt(segundoNúmero) );

	alert("la división es:  "+ resultado );
	
}

