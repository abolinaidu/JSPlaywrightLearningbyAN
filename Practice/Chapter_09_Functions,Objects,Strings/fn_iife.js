//immediately invoked  function expression[IIFE]
//these functions no need to be called

function name1()
{
    console.log("Hi");
}   //ideal way 
name1();

//IIFE way
(function ()
{
    console.log("Hello");
}) ();

//example 2
function getEnv()
{
    console.log("Staging");
}
getEnv();

(function ()
{
    console.log("Staging");
})();

//arrow function with IIFE -only 2% usage
//no function keyword, no name , no return type needed

(()=>{
    console.log("setup complete");
})();
