/* 	nombre: Ramirez Franco
	TP N°3 Ferrete Pintura

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosCentigrados;	// define una variable
	let temperatura;		// define una variable

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura);	// denota una temperatura °F

	gradosCentigrados = 5/9 * (temperatura-32);

	gradosCentigrados = gradosCentigrados.toFixed(1);

	alert(gradosCentigrados+" grados (°) Centígrados.");

	// °C = 5/9 x (F-32)	fórmula de cambio de unidades
	
}

function CentigradosFahrenheit () 	

{
	let gradosFahrenheit;	// define una variable

	temperatura = document.getElementById('txtIdTemperatura').value;
	temperatura = parseInt(temperatura);	// denota una temperatura °C

	gradosFahrenheit = temperatura*1.8+32;
	gradosFahrenheit.toFixed(1);

	alert(gradosFahrenheit+" grados (°) Fahrenheit");


	// ºF = ºC x 1.8 + 32.	fórmula de cambio de unidades
	 
}

