//In JavaScript, an object is a collection of **key-value pairs** stored in **heap memory**. Variables don't hold the object itself  they hold a **reference** (memory address) to it.

//Objects are collections of key-value pairs. They are fundamental to JavaScript and used everywhere.


//Objects =key and value
//key should not be in double quotes -Json
//keys are case sensitive 
//whenever an object is assigned to another object,it copies the reference
let student ={name :"Amit", age:65};
let student1 ={name :"aboli", age:65};

//Json -let student1 ={"name" :"aboli", age:65}; //key in doubble quotes is Json

let a= {status: "pass"};
console.log(a.status);
console.log(a["status"]);

let b =a; //copy the reference not the object -it will point to 'a' 
b.status ="fail";
console.log(a.status); //a=fail

//Two different memory
let c= {status :"pass"};
let d= {status :"pass"};
console.log(c === d);

