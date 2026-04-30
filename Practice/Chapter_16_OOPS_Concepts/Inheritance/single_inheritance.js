//Super keyword is used to call the parent class, child class and its functtions
//super is used to call the parent class constructor.
class Animal{
    constructor(name)
    {
        this.name = name;
    }
    eat(){
        console.log(this.name, " is eating");
    }

    sleep(){
        console.log(this.name, " is sleeping");
    }

}


class Dog extends Animal{
    constructor(name,breed)
    {
        //new Animal(name); // this is used to create an instance of the parent class
        super(name); // super is used to call the parent class constructor
        this.breed = breed;
    }


    bark(){
        console.log(this.name," is barking");
    }   
}

let dog =new Dog("Buddy", "Golden Retriever");
dog.eat();
dog.sleep();
dog.bark(); 

