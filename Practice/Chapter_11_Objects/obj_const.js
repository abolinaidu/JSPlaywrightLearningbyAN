const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);

// Accessing properties
console.log(user.name);
console.log(user["age"]);

// Dynamic property access
const key = "email";
console.log(user[key]);


// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);

// destructuring
let config ={};
config.browser="Chrome"; //add
config.timeout=3000;   //add
config.timeout=5000;    //modify
delete config.browser();  //delete
console.log(browser);
