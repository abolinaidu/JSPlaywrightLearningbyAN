//the value of inner functions is remembered by outer function
function makeretryTracker(max)
{
    let attempts =0;


    function tryAgain(testName)
    {
        attempts++;
        if(attempts>max)
        {
            return`${testName} exceeded max retries(${max}) `;
        }
        return`Attempt ${attempts}/${max} for ${testName}`;
    };
    return tryAgain;
   
}

let retry = makeretryTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));




