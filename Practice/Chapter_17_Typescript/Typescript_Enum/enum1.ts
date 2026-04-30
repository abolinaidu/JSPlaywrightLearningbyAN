enum TestStatus {
Pass="Pass",
Fail="Fail",
Skipped="Skipped",  
Pending="Pending",
Blocked="Blocked",
}
//const keyword not required as they are constants by default
console.log("Test Status:", TestStatus.Pass);