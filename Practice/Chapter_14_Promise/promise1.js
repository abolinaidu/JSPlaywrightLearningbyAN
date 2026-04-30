// Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell.
//callback doesn't give a guarantee that it will be resolved or rejected, hence promise is used to handle asynchronous operations and provide a more structured way to manage success and failure cases.

//In Promise , the resolve will get called but for failure /reject we use the catch function
//Axios library is a popular JavaScript library used for making API HTTP requests from the browser or Node.js. It provides a simple and intuitive API for handling asynchronous operations, making it easier to work with promises and handle responses from APIs. With Axios, you can easily send GET, POST, PUT, DELETE, and other types of HTTP requests, and it returns a promise that resolves with the response data or rejects with an error if the request fails. This makes it a powerful tool for working with APIs and handling asynchronous data in JavaScript applications.
let apicall = new Promise(function(resolve, reject)  {
resolve( {status:200,body:'Userdata'} );
});

apicall.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});

let apicall2 = new Promise(function(resolve, reject)  {
reject( {status:404,body:'Userdata not found'} );
});

apicall2.then(function(response){
    console.log(response);
}).catch(function(error){
    console.log(error);
});     

