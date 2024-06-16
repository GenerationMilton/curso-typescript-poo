export class MyDate{
  year: number;
  month: number;
  day: number;

  constructor(year:number, month:number, day:number){
    this.year= year;
    this.month=month;
    this.day=day;
  }

  //metodo
  printformat():string {
    return `${this.day}/${this.month}/${this.year}`;
  }

  //metodo 2
  add(amount:number, type:'days'|'months'|'years'){
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
console.log(myDate.printformat());
myDate.add(3, 'days');
console.log(myDate.printformat());
myDate.add(1, 'months');
console.log(myDate.printformat());

//
console.log(myDate.month);
console.log(myDate.year)
console.log(myDate.day);
