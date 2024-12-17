"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    // printName( magneto );
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }
    // private name: string;
    // private team: string;
    // public realName?: string;
    Avenger.avgAge = 35;
    // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log( antman )
    // console.log( Avenger.getAvgAge() )
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('EL nombre debe de ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullname());
        }
    }
    // const wolverine = new Xmen('Wolverine','Logan', true)
    // wolverine.fullName = 'Fe';
    // console.log(wolverine.fullName );
    // wolverine.getFullnameDesdeXmen();
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único')
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único')
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único')
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map