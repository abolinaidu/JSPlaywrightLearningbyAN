function getStatus(code)
{
    if (code>=200 && code<300) return "success";
    if (code>=400 && code<500) return "client error";
    if (code>=500) return "server error";
}
console.log(getStatus(200));   //sucess
console.log(getStatus(501));  //server error
console.log(getStatus(404));   //client error

function logTest(name)
{
    console.log(`Running : ${name}`);   //Running : Login
    //no return statement
}

let result = logTest("Login");
console.log(result);   // undefined

//Expression not hoisted , hoisting is possible only for normal functions and var keywords
//hoisting is not possible for let and const keywords
/*
sayHi("Bob"); //error
const sayHi =function (name)
{
return `Hi, ${name}!`;
}

*/