export class MyDate{
  public year: number;
  public month: number;
  public day: number;

  constructor(year:number, month:number, day:number){
    this.year= year;
    this.month=month;
    this.day=day;
  }

  //metodo
  public printformat():string {
    return `${this.day}/${this.month}/${this.year}`;
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

}

const myDate = new MyDate(1993,1,15);
console.log(myDate.day);
myDate.day=12;
console.log(myDate.day);

