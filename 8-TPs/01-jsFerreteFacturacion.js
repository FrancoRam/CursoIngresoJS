/*
	nombre: Franco Ramirez
	TP1: Ferrete facturación


1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let primerProducto;	 // define una variable
	let segundoProducto; // define una variable
	let tercerProducto;	 // define una variable
	let sumaDeProductos;	 // define una variable

	primerProducto = document.getElementById('txtIdPrecioUno').value;
	segundoProducto = document.getElementById('txtIdPrecioDos').value;
	tercerProducto = document.getElementById('txtIdPrecioTres').value;

	primerProducto = parseInt(primerProducto);
	segundoProducto = parseInt(segundoProducto);
	tercerProducto = parseInt(tercerProducto);

	sumaDeProductos = primerProducto+segundoProducto+tercerProducto;

	alert("la suma total es: "+sumaDeProductos);


}

function Promedio () 
{
	let primerProducto;	 // define una variable
	let segundoProducto; // define una variable
	let tercerProducto;	 // define una variable
	let promedio; 		 // define una varibale
	let cantidadDeProductos; // define una variable

	primerProducto = document.getElementById('txtIdPrecioUno').value;
	segundoProducto = document.getElementById('txtIdPrecioDos').value;
	tercerProducto = document.getElementById('txtIdPrecioTres').value;

	cantidadDeProductos = 3	// cantidad de productos que hay

	primerProducto = parseInt(primerProducto);
	segundoProducto = parseInt(segundoProducto);
	tercerProducto = parseInt(tercerProducto);

	promedio = (primerProducto+segundoProducto+tercerProducto)/cantidadDeProductos; // saca el primedio de los productos que hay

	alert("El promedio es: "+promedio);

	
}
function PrecioFinal () 
{
	let primerProducto;	 // define una variable
	let segundoProducto; // define una variable
	let tercerProducto;	 // define una variable
	let sumaDeProductos;	 // define una variable
	let impuestoAlValorAgregado; // define una variable
	let sumaDeProductosMásIva; // define una variable

	primerProducto = document.getElementById('txtIdPrecioUno').value;
	segundoProducto = document.getElementById('txtIdPrecioDos').value;
	tercerProducto = document.getElementById('txtIdPrecioTres').value;

	impuestoAlValorAgregado = 21;

	primerProducto = parseInt(primerProducto);
	segundoProducto = parseInt(segundoProducto);
	tercerProducto = parseInt(tercerProducto);

	sumaDeProductos = primerProducto+segundoProducto+tercerProducto;
	sumaDeProductosMásIva= ((sumaDeProductos/100)*impuestoAlValorAgregado)+sumaDeProductos;


	alert("la suma total es: "+sumaDeProductosMásIva);
	
}