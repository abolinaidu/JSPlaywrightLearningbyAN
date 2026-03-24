//Scope in functions

let env ="staging";

function setupConfig()
{
    let timeout =3000;
    console.log(env);
    console.log(timeout);
}

setupConfig();

console.log(env);
console.log(timeout); //Reference error - not accessible outside the block

//Nested scope

function outer()
    {
        let x=10; //variable accessible for inner
    
    function inner()
    {
        let y=20; // blocked scope variable
        console.log(x); ///inner can access the outer variables
    }
inner();
console.log(y); //outer cannot access inner variables due to blocked scope.
    }