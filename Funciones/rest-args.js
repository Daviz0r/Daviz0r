"use strict";
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
