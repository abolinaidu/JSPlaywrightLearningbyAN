function retry(testName,maxRetries =3,delay=1000)
{
    console.log(`Retrying ${testName} upto to ${maxRetries}times ,${delay}ms apart`)
}

retry("Login"); // Retrying Login upto to 3times ,1000ms apart


//if parameters are given in function then it will use new value

retry("Checkout",5,3000);  //Retrying Checkout upto to 5times ,3000ms apart