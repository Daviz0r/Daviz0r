"use strict";
const msg = "Hola mundo";
const nuevaFuncion = "Nueva funcion";
console.log(msg);
///
let tablaDelUno = function () {
    for (let i = 0; i <= 10; i++)
        console.log("1 x", i, "=", 1 * i);
};
tablaDelUno();
///
for (let i = 0; i <= 10; i++) {
    console.log("2 x", i, "=", 2 * i);
}
///
function tablaDelTres(hasta) {
    for (let i = 0; i <= hasta; i++) {
        console.log("3 x", i, "=", 3 * i);
    }
}
tablaDelTres(5);
/// nueva funcion
console.log(nuevaFuncion);
function tablaMultiplicar(desde, tabla, hasta) {
    for (let i = desde; i <= hasta; i++) {
        console.log(tabla, 'x', i, '=', tabla * i);
    }
}
tablaMultiplicar(9, 5, 10);
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log('Disparando');
    }
};
console.log(bumblebee);
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "no last name"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "no last name"}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
    const addNumber = (a, b, c, d, e, f) => {
        return (a + b + c + d + e + f);
    };
    const sumaTotal = addNumber(10, 5, 3, -99, -1, 100);
    console.log({ sumaTotal });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "no last name"}`;
    };
    const name = fullName('Tony');
    console.log({ name });
    const suma = (a, b, c, d, e, f) => {
        return (a + b + c + d + e + f);
    };
    const sumaTotal = suma(10, 5, 3, -99, -1, 100);
    console.log({ sumaTotal });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal Activada!';
    };
    console.log(typeof activateBatisignal);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const name = fullName('Tony', 'Stark', 'Gonzalez');
    console.log({ name });
    const suma = (a, b, c, d, e, f) => {
        return (a + b + c + d + e + f);
    };
    const sumaTotal = suma(10, 5, 3, -99, -1, 100);
    console.log({ sumaTotal });
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 28,
        powers: ['Super volocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super volocidad']
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 28,
        powers: ['Super volocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super volocidad'],
        getName() {
            return this.name;
        },
    };
    console.log(flash.getName());
    console.log({ superman });
})();
//# sourceMappingURL=main.js.map