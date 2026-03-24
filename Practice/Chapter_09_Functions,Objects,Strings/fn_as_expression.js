//Function as expression - create function and give the name later
//Assign the function to a variable and then call/print the variable having the function
//why we use const for function - As we won't change the function much hence we can use const instead of let
//Duplicate values in functions is also allowed in javascript

const greet = function(name)
{
    return `Hello ${name}!!`;
}

let c = greet("Shrinay");   //either this
console.log(greet("Aboli"));    //or this
console.log(c);


const greet1 = function(name)
{
    return `Hello ${name}!!`;
}
console.log(greet1("Shrinay"));   //either this