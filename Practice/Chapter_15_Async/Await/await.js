async function getTestResults(params) {
    return "Pass";
}

getTestResults().then(function(result){
    console.log(result);
});

async function displayResults() {
    let results = await getTestResults();    
    console.log(results);
}   
displayResults();


async function testApi() {
try{
    let result = await Promise.reject("API call Failed");
    console.log(result);
}
catch(error){
    console.log(error); 
}finally{
    console.log("API call completed");
}
}

testApi();
