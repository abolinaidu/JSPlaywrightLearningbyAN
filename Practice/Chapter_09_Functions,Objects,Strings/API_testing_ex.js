//check status code 
//Normal function
function validateStatusCode(status)
{
    if (status>=200 && status<=300)
    console.log("Request is fine");
}
validateStatusCode(201);
validateStatusCode(500);
//function as expression
const validateStatCode_Exp = function (status)
{
{
    if (status>=200 && status<=300)
    console.log("Request is fine");
}
}
validateStatCode_Exp(205);

//arrow function
const validateStatCodeArrow = (status) =>
{
   if (status>=200 && status<=300)
    console.log("Request is fine"); 
}
validateStatCodeArrow(250);
 //semicolon is optional