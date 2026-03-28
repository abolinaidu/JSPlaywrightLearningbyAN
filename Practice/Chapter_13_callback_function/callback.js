//callback function -can return a value


function placeOrder(item,callback)
{
    console.log("Placing  order");   //execution order -1
    callback();       //functioncall          //execution order -1
}
//define
function print()                //execution order -1
{
console.log("callback-Done with order");
}
//first way- function call
placeOrder('Burger',print); 

//anonymous function -function without a name-
placeOrder('Burger',function(){
console.log("Function without name");
} );

//Arrow function 

placeOrder("Burger",() => {
console.log("Arrow Function without name");
}
); 
function test(text,callback)
{
    console.log("Hi");
}

test("Verify login is working",()=>
{
    console.log("running");
}
);
//If multiple functions -