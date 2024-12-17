(() => {

    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger ={
        name: 'Iron man',
        weapon: 'Armor suit'
    }

    const captainAmerica: Avenger ={
        name: 'Capitan america',
        weapon: 'Shield'
    }

    const thor: Avenger ={
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, thor, captainAmerica];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)        
    }

    let frutas: string[] = ['pera', 'manzana'];
    let [pera, limo] = frutas
    console.log(frutas)

})()