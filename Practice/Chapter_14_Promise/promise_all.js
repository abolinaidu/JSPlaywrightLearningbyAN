let checkAuthentication = Promise.resolve('Auth Ok');
    let checkDB =Promise.resolve('DB Ok');
    let checkCache =Promise.resolve('Cache Ok');

Promise.all([checkAuthentication, checkDB, checkCache])
.then(function(results) {
    console.log('All checks passed: ' + results);       
})
Promise.all([
    Promise.resolve('Auth Ok'),
    Promise.reject('DB Failed'),
    Promise.resolve('Cache Ok') 
]).then(function(results) {
    console.log('All checks passed: ' + results);       
}).catch(function(error) {
    console.log('Error: ' + error);       
}  );
