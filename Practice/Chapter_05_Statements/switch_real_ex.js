//default statement is not mandatory
let responseCode = 500;
switch(responseCode){
    case 200:
        console.log(" 200 OK");
        break;
    case 404:
        console.log("404 Not Found");
        break;
    case 500:
        console.log("500 Internal Server Error");   
        break;
}