let apples: number = 5;
let apple = 1; //inference
let speed: string = 'fast'
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
let colors: string[] = ['green','red','blue']
let myNumbers: number[] = [1,2,3];

class Car {

}
let car: Car = new Car()

let point: { x: number, y: number} = {
  x: 20,
  y: 30
}

const logNumber: (i:number)=> void = (i:number) => {
  console.log(i)
}