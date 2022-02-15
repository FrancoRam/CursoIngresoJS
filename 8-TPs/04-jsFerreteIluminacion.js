/*
    nombre:Ramirez Franco
    Ej: TP N°4


4.    Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.

A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

C.  Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.  Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.

E.  Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    let descuento;
    let importeYaConDescuento;
    let cantidadDeLamparitas;
    let importeActual;
    let marcaDeLamparita;
    let precioUnidadDeLamparitas;
    let importeConDescuento;
    let impuesto;

    descuento = 0;

    cantidadDeLamparitas = document.getElementById('txtIdCantidad').value;
    cantidadDeLamparitas = parseInt(cantidadDeLamparitas);
    marcaDeLamparita = document.getElementById('Marca').value;


    precioUnidadDeLamparitas = 35;
    importeActual = precioUnidadDeLamparitas * cantidadDeLamparitas;


    //A.  Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 

    if(cantidadDeLamparitas>5)
    {
    descuento = 50;
    }
    else 
    {   //B.  Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

        if(cantidadDeLamparitas == 5)
        {
            if(marcaDeLamparita == "ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;           
            }
        }
        else 
        {
            //C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un         descuento del 25 % y si es de otra marca el descuento es del 20%.
            if (cantidadDeLamparitas==4)
            {
                if(marcaDeLamparita == "ArgentinaLuz" || marcaDeLamparita == "FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 30;
                }
            }//D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si  es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
            else
            {   
                if(cantidadDeLamparitas==3)
                {
                    if(marcaDeLamparita == "ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    else
                    {

                        if(marcaDeLamparita == "FelipeLamparas" )
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                        }
                    }
                }
            }         
        }       
    }

    importeYaConDescuento = (importeActual*(100-descuento)/100); // aplica un descuento del 50%

    console.log(importeYaConDescuento);
    if (importeYaConDescuento > 120) 
    {   
        impuesto = importeYaConDescuento * 10/100;
        importeYaConDescuento = importeYaConDescuento + impuesto;
        alert("IIBB Usted pago "+importeYaConDescuento+", siendo "+impuesto+" el impuesto que se pagó.");
    }
    
    document.getElementById('txtIdprecioDescuento').value = importeYaConDescuento;    
}


      














