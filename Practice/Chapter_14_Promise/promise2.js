//a Promise is an object .it wraps a value that will be available later.

let order = new Promise(function(resolve, reject) {
    let foodready = true;
    if(foodready)
    {
        resolve("Pizza is delivered");
    }
    else{
        reject("Order cancellled");
   }
});

console.log(order);
