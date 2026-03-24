function runTest(name,status,duration)
{
    return`${name}: ${status} $({duration}ms)`;
}

runTest("Login","pass",320);   //Login pass (320ms)