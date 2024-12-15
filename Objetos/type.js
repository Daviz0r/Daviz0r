"use strict";
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
