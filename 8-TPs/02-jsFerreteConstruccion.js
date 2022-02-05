/*
	Nombre: Ramirez Franco
	TP 2: Ferrete construcción

2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () // es un terreno rectangular
{
	let anchoDelTerreno;		// Define una variable
	let largoDelTerreno;	// Define una variable
	let perímetroDelTerrenoRectangular;	// Define una variable
	let cantidadDeAlambresPorLado;	// Define una variable

	anchoDelTerreno = document.getElementById('txtIdAncho').value;
	largoDelTerreno = document.getElementById('txtIdLargo').value;

	anchoDelTerreno = parseInt(anchoDelTerreno); // "Parsea" el ID de usuario
	largoDelTerreno = parseInt(largoDelTerreno); // "Parsea" el ID de usuario

	cantidadDeAlambresPorLado = 3;	// indica la cantidad de alambres que tendrá el cerco.
	perímetroDelTerrenoRectangular = (anchoDelTerreno*2 + largoDelTerreno*2)*cantidadDeAlambresPorLado;

	alert("La cantidad de alambre necesario es: "+perímetroDelTerrenoRectangular+" metros"); // indica en pantalla el mensaje

}
function Circulo () // es un terreno circular
{	
	let radio;
	let perímetroDelTerrenoCircular;// Define una variable
	let cantidadDeVueltasDeAlambre;	// Define una variable

	radio = document.getElementById('txtIdRadio').value;

	radio = parseInt(radio); // "Parsea" el ID de usuario

	cantidadDeVueltasDeAlambre = 3;	// indica la cantidad de alambres que tendrá el cerco.

	perímetroDelTerrenoCircular = (2 * 3.14* radio) * cantidadDeVueltasDeAlambre;

	alert("La cantidad de alambre necesario es: "+perímetroDelTerrenoCircular+" metros"); // indica en pantalla el mensaje
}
function Materiales () // materiales para un contrapiso en un terreno rectangular
{
	let cementoNecesario;	// Define una variable
	let calNecesaria; 	 	// Define una variable
	let anchoDelTerreno;	// Define una variable
	let largoDelTerreno;	// Define una variable
	let cal;				// Define una variable
	let cemento;			// Define una variable

	cal = 3;	// indica la cantidad de bolsas necesarias por m2
	cemento = 2;// indica la cantidad de bolsas necesarias por m2


	anchoDelTerreno = document.getElementById('txtIdAncho').value;
	largoDelTerreno = document.getElementById('txtIdLargo').value;

	anchoDelTerreno = parseInt(anchoDelTerreno); // "Parsea" el ID de usuario
	largoDelTerreno = parseInt(largoDelTerreno); // "Parsea" el ID de usuario

	cementoNecesario = (anchoDelTerreno*largoDelTerreno) *cemento; // número de bolsas necesarias para el terreno
	calNecesaria	 = (anchoDelTerreno*largoDelTerreno) *cal; // número de bolsas necesarias para el terreno

	alert ("Bolsas necesarias son: "+cementoNecesario +" de cemento y "+calNecesaria +" de cal");
}