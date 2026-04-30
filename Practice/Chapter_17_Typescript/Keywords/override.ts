class BaseTest1 {
    setup(): void {
        console.log("[BASE] Open browser");
    }
    teardown(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest1 extends BaseTest1 {

    override setup(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest1 extends BaseTest1 {

    override setup(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest1();
let apitest = new APITest1();
test.setup();
apitest.setup();