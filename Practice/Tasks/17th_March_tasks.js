//1.what is output:
console.log(greet("Alice"));
function greet(name) {
  return `Hello, ${name}!`;
}   // output - Hello,Alice!

//2.what is output:
console.log(getStatus(200));
const getStatus = (code) => code >= 200 ? "ok" : "error";
//-Output -reference error 

//3.What does this function return?

function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}console.log(analyze());   //output -0  - empty array

//4. What is the output?

function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());
//output : 3

//5. Which is a pure function?
//  a) function log(msg) { console.log(msg); } b) function add(a, b) { return a + b; } c) function getTime() { return Date.now(); } d) function push(arr, val) { arr.push(val); return arr; }
//output : b)

//6. What is the output?

function test(...args) {
  return args.length;
}
test("login", "pass", 200, true);
console.log(test());
//output : 4

//7. What is the output?

const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv());   
//output - undefined

//8. What does this return?

function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
console.log([1, 2, 3].map(double).map(addOne));
//output -[3,5,7]

//9. What is the output?

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`));
//output - Running :Login


//10. What is the output?

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;   //20
  }
  return x + inner();   //10+20
}
console.log(outer());
//output : 30