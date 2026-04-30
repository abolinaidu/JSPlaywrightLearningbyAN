let apiCall= new Promise(function(resolve,reject)
{
    reject("500 Error: Internal Server Error");
});

apiCall.then(function(data)
{
    console.log("data is success")
}).catch(function(error)
{
    console.log(error)

});
