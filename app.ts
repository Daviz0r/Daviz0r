const msg: string = "Hola mundo";
const nuevaFuncion: string = "Nueva funcion"

console.log(msg)
///
let tablaDelUno = function(){
    for (let i = 0; i<= 10; i++) console.log("1 x", i, "=", 1 * i);
}

tablaDelUno();
///

for (let i = 0; i <= 10; i++) {
    console.log("2 x", i, "=", 2 * i);
  }

///
function tablaDelTres(hasta:number) {
    for (let i = 0; i <= hasta; i++){
        console.log("3 x", i, "=", 3 * i);
    }
}
tablaDelTres(5);

/// nueva funcion
console.log(nuevaFuncion);


function tablaMultiplicar(desde:number, tabla:number, hasta:number) {
    for (let i = desde; i <= hasta; i++) {
        console.log(tabla, 'x', i, '=', tabla * i);
    }
}

tablaMultiplicar(9,5,10);