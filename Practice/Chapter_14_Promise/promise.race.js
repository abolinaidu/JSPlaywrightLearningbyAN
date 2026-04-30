let fastServer = new Promise(function(resolve){
    setTimeout(function() {
        resolve('Fast server response 100ms');
    }), 100
});

let slowServer = new Promise(function(resolve) {
    setTimeout(function() {
        resolve('Slow server response 50ms');
    }), 500
});          

    Promise.race([fastServer, slowServer]).then(function(result) {
        console.log(result); // Output: Fast server response 10ms
    })
