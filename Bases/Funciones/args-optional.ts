(() => {

    const fullName = ( firstName: string, lastName?:string ):string =>{
        return `${ firstName } ${lastName || "no last name"}`;

    }

    const name = fullName('Tony');
    console.log({ name });

    const suma = (a:number, b:number, c:number , d:number , e:number , f:number ):number =>{
        return ( a + b + c + d + e + f );
    }
    const sumaTotal = suma(10,5,3,-99,-1,100)
    console.log({sumaTotal});
    
})()