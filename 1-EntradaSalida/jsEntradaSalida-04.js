/* 
nombre: Franco Ramirez
e/s ej n°4

Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
let nombreIngresado;
	nombreIngresado = prompt("ingrese su nombre:", "Franco");
	document.getElementById('txtIdNombre').value = nombreIngresado;	
	

}

