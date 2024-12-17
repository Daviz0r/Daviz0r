(() => {

    const fullName = ( firstName: string, lastName?:string, upper:boolean = false ):string =>{
        if ( upper ) {
            return `${ firstName } ${lastName || "no last name"}`.toUpperCase();
        } else {
            return `${ firstName } ${lastName || "no last name"}`;
        }

    }

    const name = fullName('Tony', 'Stark', true);
    console.log({ name });

    const addNumber = (a:number, b:number, c:number , d:number , e:number , f:number ):number =>{
        return ( a + b + c + d + e + f );
    }
    const sumaTotal = addNumber(10,5,3,-99,-1,100)
    console.log({sumaTotal});
    
})()