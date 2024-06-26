
export class MyDate{

  constructor(
    public year:number = 1993,
    public month:number = 7,
    private day:number = 9
    ){}

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

const myDate2 = new MyDate();
console.log('()=>',myDate2.printformat());

const myDate3 = new MyDate(2022);
console.log('(2022) =>',myDate3.printformat());

const myDate4 = new MyDate(2022, 3);
console.log('(2022, 3) =>',myDate4.printformat());

