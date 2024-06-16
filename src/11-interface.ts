interface Driver{
  database: string;
  password:string;
  port: number;

  //la interfaz sirve para tipar atributos y metodos y se establece un contratocon las clases
  //que la implementen
  connect():void;
  disconnect():void;
  isConnected(name: string):boolean;
}

// const driver: Driver ={
//   database: '',
//   password: '',
//   port:23,

// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password:string,
    public port:number,
    private host:number,
  ){}
  disconnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    return true;
  }
  connect(): void {
      //code
  }

}

class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password:string,
    public port:number
  ){}
  disconnect(): void {
   //code
  }
  isConnected(name: string): boolean {
    return true;
  }
  connect(): void {
  }
}
