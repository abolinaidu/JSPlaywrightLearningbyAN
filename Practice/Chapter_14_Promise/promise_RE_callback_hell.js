//Promise chaining -  solution for callback hell

function openBrowser(){
    return new Promise(function(resolve) {
        resolve('Browser opened');
    });
}
function goToLogin(){
    return new Promise(function(resolve) {
        resolve('Login page loaded');
    }   );  
}
function enterCredentials(){
    return new Promise(function(resolve) {
        resolve('Credentials entered');
    }   );  
}
function clickLogin(){
    return new Promise(function(resolve) {
        resolve('Login button clicked');
    }   );  
}
              
openBrowser()
.then(function(msg) {
    console.log("Step1: Login page opened");
    return openBrowser();
})
.then(function(msg) {
    console.log("Step2: Login page loaded");
    return goToLogin();
})
.then(function(msg) {
    console.log("Step3: Credentials entered");
    return enterCredentials();
})
.then(function(msg) {
    console.log("Step4: Login successful");
}).catch(function(error) {
    console.log("Error:Unable to login " + error);
}).finally(function() {
    console.log("Login process completed");
});

