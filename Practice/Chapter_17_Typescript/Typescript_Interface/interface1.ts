interface   Person {
    name: string;
    age: number;
    greet(): void;
}   
    console.log("Interface Example");
    const person1: Person = {
        name: "John",   
        age: 30,
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    person1.greet();    
    