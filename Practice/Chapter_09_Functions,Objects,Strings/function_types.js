//Functions ,Objects,Strings & multidimensiional arrays

//without function
let score =85;
let result =score>=70 ? "pass" : "fail";
console.log(result);


//Function -reuasable block of code that performs specific task
/*define the function:
function name(param){
code that you want to execute
}
Calling
name(90);
*/

//Basic Type1 function - no argument,no return type
greet();//Calling the function before definition is possible , becoz the definition is given priority 
function greet()
{
    console.log("Hello");
}
greet(); 

//Basic Type2 function - with argument,no return type

function greetByName(name)
{
console.log("Hi ",name);
}

greetByName("Aboli");
greetByName("Shrinay");
greetByName("Sayali");

//Basic Type3 function - without argument, with return type

function sayHello()
{
   return "Hello"; //if this is commented  the it will return nothing -undefined.
}
let rel = sayHello();
console.log(rel);
//why we need return type : IF we just do console.log it will not return anything,hence we need return type

// Type 4 function - with argument and return type

function sumOfTwo(a, b)
{
    return a+b;
}
let sum = sumOfTwo(4,5);
let sum1 = sumOfTwo(10,15);
console.log(sum);  //9
console.log(sum1);  //25
