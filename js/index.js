alert("Bienvenido a Luli Pasteleria");

let nombre = prompt("Igrese su nombre");
alert(`Bienvenido ${nombre} a Luli Pasteleria`);

let productos = parseInt(prompt("Ingrese \n1 Macarons, \n2 Torta rosa con flores naturales, \n3 Torta frutilla, \n4 Mix frutilla y chocolate"));
alert (`${nombre} elegiste ${productos}`);

let precio = 0;
let precioTotal = 0;

do{
    if(productos === 1){
        unidad = parseInt(prompt(`Elegiste ${productos} \nMacarons \n1u $100 \n6u $500`));
        if(unidad === 1){
            precio = 100;
            operacion(precio);
        }else if(unidad === 6){
            precio = 500;
            operacion(precio);
        }else if(unidad === 12){
            precio = 1000;
            operacion(precio);
        }else("no contamos con ese producto")
    }
    if(productos === 2){
        unidad = parseInt(prompt(`Elegiste ${productos} \nTorta rosa con flores naturales \n1u $1250 \n2u $2000 `));
        if(unidad === 1){
            precio = 1250;
            operacion(precio);
        }else if(unidad === 2){
            precio = 2000;
            operacion(precio);
        }else("no contamos con ese producto")
        
    }
    if(productos === 3){
        unidad = parseInt(prompt(`Elegiste ${productos} \nTorta frutilla \n1u $1000 \n2u $1800`));
        if(unidad === 1){
            precio = 1000;
            operacion(precio);
        }else if(unidad === 2){
            precio = 1800;
            operacion(precio);
        }else("no contamos con ese producto")
        
    }
    if(productos === 4){
        unidad = parseInt(prompt(`Elegiste ${productos} \nMix frutilla y chocolate \n1u $2000`));
        if(unidad === 1){
            precio = 2000;
            operacion(precio);
        }else("no contamos con ese producto")
        
    }

    precioTotal = precio + precioTotal
    rta = prompt(`${nombre} queres seguir comprando \nsi \nno`).toLowerCase();

    if(rta === "si"){
        productos = parseInt(prompt("Ingrese \n1 Macarons, \n2 Torta rosa con flores naturales, \n3 Torta frutilla, \n4 Mix frutilla y chocolate"));
        alert (`${nombre} elegiste ${productos}`);
    }else if(rta === "no"){
        alert("Total " + precioTotal)
    }

}while(rta != "no");

function operacion(precio){
    alert("precio total " + precio);
}