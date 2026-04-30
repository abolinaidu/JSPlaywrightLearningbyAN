interface Executable{
    name:string;
    run():void;
    getStatus():string;
}

class Task implements Executable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run():void{
        console.log(`Running task: ${this.name}`);
    }
    getStatus():string{
        return "Pass";
    }
}

let tc:Executable = new Task("Login Test");
console.log("Task Name:", tc.name);
tc.run();
console.log("Task Status:", tc.getStatus());