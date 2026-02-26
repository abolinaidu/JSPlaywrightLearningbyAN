let testscore = 85;
switch(true){
    case (testscore >= 90): 
        console.log("Outstanding -top performer");
        break;
    case (testscore >= 80):
        console.log("Excellent - top performer");
        break;
    case (testscore >= 70):
        console.log("Good - above average");
        break;
    case (testscore >= 60):
        console.log("Satisfactory - average");
        break;
    case (testscore >= 50):
        console.log("Needs Improvement - below average");
        break;
    default:
        console.log("Failing - unsatisfactory");
}