//recibir el id del formulario paa poderlo manipular por eventos
//para realizarlo utilizaremos las funciones del DOM de JavaScript
const FRMTERRENO = document.querySelector("#frmTerreno");

//Crear un evento click con un Listener
FRMTERRENO.addEventListener("submit",calcularPrecioTerreno)

function calcularPrecioTerreno(evt){
    evt.preventDefault();//No se actualiza la pagina(no envia datos,los porcesa en la misma pagina)
    //recibir los datos del formulario
    let medidaLargo=document.querySelector("#txtMedidaDeLargo").value ;
    let medidaAncho=document.querySelector("#txtMedidaDeAncho").value ;
    let precioMetro=document.querySelector("#txtPrecioPorMetro").value ;
    let area=medidaLargo*medidaAncho;
    let descuento=0;
    let total;
    //calculando el total
    
    let subtotal=area*precioMetro;
    //validamos el descuento en funcion de los dias
    if((medidaLargo=="")|| (medidaAncho=="")|| (precioMetro=="")){
        alert("Error! Por favor ingrese valores en todos los campos")

    }else if(area>400 && area<=800){
        descuento=subtotal*0.05;
        let imprimir2 =document.getElementById("resultado2");
    imprimir2.textContent= `Su descuento sera del 5% : $${descuento}  `;

    }else if (area>800 && area<=1000){
        descuento=subtotal*0.08;
        let imprimir2 =document.getElementById("resultado2");
        imprimir2.textContent= `Su descuento sera del 8% : $${descuento}  `;

    }else if(area>1000 && area<=2000){
        descuento=subtotal*0.1;
        let imprimir2 =document.getElementById("resultado2");
        imprimir2.textContent=  `Su descuento sera del 10% : $${descuento}  `;

    }else if(area>2000){
        descuento=subtotal*0.25
        let imprimir2 =document.getElementById("resultado2");
        imprimir2.textContent= `Su  descuento sera del 25% : $${descuento}  `;

    }
    
    total=subtotal-descuento;
    //imprimiendo resultado
    let imprimir0 =document.getElementById("resultado0");
    imprimir0.textContent= `El área total de su terreno es de : ${area} m²  `;
    let imprimir =document.getElementById("resultado");
    imprimir.textContent= `Subtotal a pagar $${subtotal}  `;
    let imprimir3 =document.getElementById("resultado3");
    imprimir3.textContent= `Su total a pagar sera de $${total}  `;
    let imprimir4 =document.getElementById("agradecimiento");
    imprimir4.textContent= `Gracias Por Su Compra!!! `;

}