//Callback hell - 
// E2E login flow of app.vwo.com
//inbuilt function' setimeout' function to call at a schedule/or execute function after a delay
function openBrowser(callback)
{
    console.log("Opening the browser");
    setTimeout(() => {
        console.log("Step1 -browser starting......");
        callback();
    }, 500);
}
function goToLogin(callback)
{
    console.log("Login the browser");
    setTimeout(() => {
        console.log("Step2 -Login Page starting......");
        callback();
    }, 500);
}
function enterCredentials(callback)
{
    console.log("Enter credentials");
    setTimeout(() => {
        console.log("Step3 -Credentials entered......");
        callback();
    }, 500);
}


//Callback hell
openBrowser(function() {
    goToLogin(function()
{
    enterCredentials(function()
{
    console.log("test complete")
})
})
});