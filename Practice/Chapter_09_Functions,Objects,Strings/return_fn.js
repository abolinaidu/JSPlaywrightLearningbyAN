//Return nothing - undefined

function logTest(name)
{
    console.log(`Running : ${name}`);   //no return statement
}
logTest("Hi this is a log");
console.log(logTest("Aboli"));   //undefined -as no return statement

//Return multiple values via array/object
function aa()
{
    return [2,3,4,5];
}
aa();
console.log(aa());  //[2,3,4,5];
        
//Return single value
function getStatus(code)
{
    if (code>=200 && code<300) return "success";
    if (code>=400 && code<500) return "client error";
    if (code>=500) return "server error";
}
//console.log(getStatus(200));   //sucess
//console.log(getStatus(501));  //server error
console.log(getStatus(404));   //client error