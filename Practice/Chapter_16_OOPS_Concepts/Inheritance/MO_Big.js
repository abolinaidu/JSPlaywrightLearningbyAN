class TestCase{
    execute(){
        console.log("Executing test case");
    }
}

class UnitTest extends TestCase{
    execute(){
        console.log("Executing unit test case");
    }
}

class E2ETest extends TestCase{
    execute(){
        console.log("Executing end to end test case");
    }
}

let tests = [new UnitTest(), new E2ETest()];

tests.forEach(function(element) {
    element.execute();
});