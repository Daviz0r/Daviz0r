(() => {

    const fullName = ( firstName: string, ...restArgs: string[] ):string =>{
        
            return `${ firstName } ${restArgs.join(' ')}`;
       
    }

    const name = fullName('Tony', 'Stark', 'Gonzalez');
    console.log({ name });

    const suma = (a:number, b:number, c:number , d:number , e:number , f:number ):number =>{
        return ( a + b + c + d + e + f );
    }
    const sumaTotal = suma(10,5,3,-99,-1,100)
    console.log({sumaTotal});
    
})()