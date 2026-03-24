//Closure is when the function remembers the outer variables even after the execution of the function is over
function outer()
{
    let message = "Hello";
    console.log("outer called :");

    function inner()
    {
        console.log(message);
    }
    return inner; // you can return the inner function when outer is called.then when inner is called the value is stored and displayed by the inner function.
}

//inner(); //not defined error -directly it cannot be called ,not allowed.
outer();
let fn_inner = outer();
fn_inner();