class BaseTest{
    setup(){
        console.log("This is the base setup method");
    }

    teardown(){
        console.log("This is the base teardown method");
    }   
}

class UITest extends BaseTest{
    setup(){
        super.setup(); // This will call the setup method of the BaseTest class
        console.log("UI maximizes the window");
    }

    teardown(){
        console.log("UI closes the window");
        super.teardown(); // This will call the teardown method of the BaseTest class
    }

}

let test = new UITest();
test.setup();
test.teardown();    
