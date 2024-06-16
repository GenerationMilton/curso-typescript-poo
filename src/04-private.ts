// Es aconsejable proteger la clase. Asi, quien utilice la clase no podrá modificar las propiedades internas de la clase
// private no me permite modificar propiedades externamente.
// private me permite entonces **encapsular** y **proteger** para tener solamente **acceso interno**

export class MyDate{
  public year: number;
  public month: number;
  private day: number;

  constructor(year:number, month:number, day:number){
    this.year= year;
    this.month=month;
    this.day=day;
  }

  //metodo
  public printformat():string {
    //adicionar metodo addPadding
    const day =this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value:number){
    if(value<10){
      return `0${value}`;
    }
    return `${value}`;

  }
  //metodo 2
  public add(amount:number, type:'days'|'months'|'years'){
    if(type === 'days'){
      this.day +=amount;
    }
    if (type==='months'){
      this.month += amount;
    }
    if(type === 'years'){
      this.year+=amount;
    }
  }

  public getDay(){
    return this.day;
  }

}

const myDate = new MyDate(1993,7,9);
console.log(myDate.printformat());
console.log(myDate.getDay());


