"use strict";
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
