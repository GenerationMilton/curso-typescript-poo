// se crea una instancia de la class Date
//la const date es del type Date
//Al crear la nueva instancia tenemos diponibles todos los //métodos de la misma
//Dichos métodos son funciones y como tal se ejecutan con ()
// y también pueden recibir argumentos
const date = new Date();
date.getHours();
date.getTime();
date.toISOString();


// las clases tienen un constructor el cual también puede recibir //parámetros (como una función).
// y sirven para inicializar la clase con ciertos valores
const date2 = new Date(1993,1,12); // 0 enero 11 dic
date2.getHours();
date2.getTime();
date2.toISOString();

console.log("🚀 ~ file: 01-class.ts ~ line 09 ~ date",date);
console.log("🚀 ~ file: 01-class.ts ~ line 17 ~ date2", date2)

//para crear una clase (molde) utilizo la palabra reservada class
//al crear una propiedad de una clase la debo tipar e inicializar //al momento de declararla. Pero también puedo
// hacerlo en el contructor que es la función que
//recibe los parámetros, cuando se genera una nueva instancia
// para ello utilizamos la palabra reservada constructor.
//para referirmos a una propiedad de una clase es decir una //variable interna de la clase
// nos referimos a dicha propiedad con la palabra reservada //this.nombre_de_la_variable

//crear la clase y su constructor
export class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year:number, month:number, day:number){
    this.year= year;
    this.month=month;
    this.day=day;
  }

}

//utilizar la clase
//ahora podemos generar una nueva istancia de nuestra clase
const MyDate1 = new MyDate(2021,3,13);
console.log("🚀 ~ file: 01-class.ts ~ line 46 ~ myDate",MyDate1);
