/*
nombre:Ramirez Franco
Ej nº5 Sentencia while

Enunciado:
Al presionar el botón pedir un sexo 'f' para femenino,
 'm' para masculino. 
*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingresa 'f' para femenino, 'm' para masculino.");

	while(sexoIngresado != "f" && sexoIngresado != "m") // letras minúsculas
	{
		sexoIngresado = prompt("sexo no válido, ingresa la letra 'f' para femenino, 'm' para masculino. ");	
	
	}
	alert("bien hecho, el sexo ingresado es el: "+sexoIngresado);
	document.getElementById('txtIdSexo').value=sexoIngresado;
}

