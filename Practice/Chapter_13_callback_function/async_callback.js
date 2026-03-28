//Asynchronous callback- code will run later  -like NEFT/RTGS payments
//QA ex-When you send API request,request will go out, code continues when we get response arrives then the callback runs;


console.log("Test1:started");

setTimeout(function()
{
    console.log("Test 2: API response received ")            //this runs after 2 secs
},2000);
 console.log("Test 3:moving to next");