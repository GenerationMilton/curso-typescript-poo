import { Dog } from "./09-protected";

function getValue<T>(value: T){

  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11,1,1]).forEach;

const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting;
