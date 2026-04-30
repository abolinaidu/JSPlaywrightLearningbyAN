//Polymorphism means any forms.
//In OOP, polymorphism means the ability of an object to take on many forms. It allows us to use a single interface to represent different types of objects. This is achieved through method overriding and method overloading.

class BaseTest{
    test(){
        console.log("This is the base test method");
    }   
}

class LoginTest extends BaseTest{
    test(){
        console.log("This is the login test method");
    }   
}


///whichever object we create, it will call the test method of that object. This is called polymorphism.

let test1 = new BaseTest();
test1.test(); // This will call the test method of the BaseTest class   
let test2 = new LoginTest();
test2.test(); // This will call the test method of the LoginTest class  
