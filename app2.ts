
// Objetos
type Automovil = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number,
  disparar?: () => void,

}

type Mutante = {
  poder: string;
  estatura: number
}

type GrupoVillanos = {
  lider: boolean;
  miembros: string[]
}

const batimovil: Automovil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: Automovil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar() { // El metodo disparar es opcional
    console.log('Disparando');
  }
};

console.log(bumblebee)

// Villanos debe de ser un arreglo de objetos personalizados
type Villano = {
  nombre: string;
  edad: (number | undefined);
  mutante: boolean;
}

const villanos: Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles:Mutante = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: GrupoVillanos = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (Mutante | GrupoVillanos);

mystique = charles;
mystique = apocalipsis;
