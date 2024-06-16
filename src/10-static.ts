console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1,2,2,8,1,0));

class myMath{
  static readonly PI=3.14;

  static max(...numbers: number[]){

    return numbers.reduce((max,item)=> max >= item? max:item);
  }
}

// const math= new myMath();
// math.PI;
console.log('MyMath.PI', myMath.PI);
console.log('MyMath.PI', myMath.max(12,2,12,3,2,1122,2,1));
const numbers =[12,2,1,1112,9,30000];
console.log('MyMath.max', myMath.max(...numbers));
console.log('MyMath.max', myMath.max(-1-9,-8));
