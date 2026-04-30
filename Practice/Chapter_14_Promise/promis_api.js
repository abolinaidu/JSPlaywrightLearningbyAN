let apiCall = new Promise(function(resolve, reject) {
    resolve({status:200,body: "User data"});
});

apiCall.then(function(response) {
    console.log(response);
    console.log(response.status);
    console.log(response.body);
}).catch(function(error) {
    console.log(error);
});


//.then () runs onlywhen the promise is resolved successfully, while .catch() runs when the promise is rejected with an error.