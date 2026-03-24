//Arrow function (ES6)

const greet =function(name)
{
    return `Hello, ${name}!`;
}

console.log(greet("Aboli"));

const greet1 =function(name1)
{
    return `Hello, ${name1}!`;
}
console.log(greet1("Aboli"));
//arrow fn works when it has a return type
//arrow function work when there is single line condition , or code
const greet3 = (name3) =>`Hello, ${name3}!`;
console.log(greet3("Aboli"));

//Arrow functions work when there is single line of code
const doubleIt = n =>n*2;
console.log(doubleIt(10));   //20


//Arrow functions also do not require parameters

const getEnv = ()=>"staging";
console.log(getEnv());

//Arrow function can be used for multi line we just have to replace () with {} +return statement

const getResult =(score) =>{
    if (score >=70)
        return "pass";
    return "fail";
}
console.log(getResult(60));

