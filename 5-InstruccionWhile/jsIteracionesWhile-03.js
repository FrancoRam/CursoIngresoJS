/*
nombre: Ramirez Franco
Ej n°3

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	let claveCorrecta;




	claveIngresada = prompt("ingrese el número clave.","ingrese aquí la clave");

	claveCorrecta = "utn750";

	while(claveIngresada != claveCorrecta)
	{
		claveIngresada = prompt("la clave ingresada no es correcta.Inténtelo nuevamente.") ;
		
	}
	alert("clave ingresada es correcta");
	
}//FIN DE LA FUNCIÓN
