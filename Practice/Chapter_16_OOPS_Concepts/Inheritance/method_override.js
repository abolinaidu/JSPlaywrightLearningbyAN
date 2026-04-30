//Method overriding is when child class has the same method as the parent class. When you call the method, it will call the child class method instead of the parent class method.

class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("APITest: open browser");
    }
}

let test = new APITest();
test.setup(); // whoever object is present, it will call that. 