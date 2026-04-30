//Creating functions in an interface

interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
    // Optional method
   // divide(a: number, b: number) => number ;
} 

const cal : Calculator = {
    add(a:number,b:number) { return a+b; },
    subtract(a,b) { return a - b; },
    multiply(a,b) { return a * b; },
    divide(a,b) { return a / b; },
    }

  //optional method implementation
      
  /*let cal2: Calculator = {
    add(a: number, b: number) => a + b,
    subtract(a: number, b: number) => a - b,
    multiply(a: number, b: number) => a * b,
    // divide is optional, so we can choose not to implement it
  };
  */
console.log("Calculator Example");
console.log("Addition:", cal.add(10, 5));   
console.log("Subtraction:", cal.subtract(10, 5));
console.log("Multiplication:", cal.multiply(10, 5));
console.log("Division:", cal.divide(10, 5));