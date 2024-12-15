(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName: () => string;

    }


    let flash: Hero = {
        name: 'Barry Allen',
        age : 28,
        powers: ['Super volocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

    let superman: Hero = {
        name: 'Clark kent',
        age : 60,
        powers: ['Super volocidad'],
        getName() {
            return this.name;
        },
    }

    console.log(flash.getName())
    console.log({superman})
})()