//Constructors are used to create objects in JavaScript. They are functions that are used to initialize the properties of an object. The constructor function is called when an object is created using the new keyword.
//Constructor is a setup function,it has an ability to run automatically when an object is created. It is used to initialize the properties of an object. It is a special function that is called when an object is created using the new keyword.
class Car{
    constructor(name,brand, model, year) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    drive(){
        console.log('Driving a car' + this.name,this.brand,this.model,this.year);
    }
    printDetails(){
        console.log('Details of a car');
    }
}

let newcar = new Car(' Swift','Maruti', 'Dzire', 2020);
console.log(newcar);
newcar.drive();
newcar.printDetails();