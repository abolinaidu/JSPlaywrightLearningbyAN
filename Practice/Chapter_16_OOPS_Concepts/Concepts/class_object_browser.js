
class  Testcase{
    constructor(name, status,priority) {
        this.name =name;
        this.status = status;
        this.priority = priority;
    }
     displayname() {
        console.log(this.name + " -->" +this.status + " -->" + this.priority);
    }
}

let logintest = new Testcase('Login test', 'Pass', 'P0');
logintest.displayname();

let signuptest = new Testcase('Signup test', 'Fail', 'P1');
signuptest.displayname();   
//inside a class we don't need the function keyword as it is a method inside the class.
