/*1. What is an Object in JavaScript?
 An object is a collection of data in key-value pairs

Example:
const person = {
  name: "Shrinay",
  age: 05,
  city: "Mumbai"
};

 Here [name, age, city] are → keys
Here ["Suyash", 21, "Mumbai" ] are → values

2. How do you access object properties?
 Using dot notation:
console.log(person.name); // Shrinay
Using bracket notation:
console.log(person["age"]); // 05

3. Difference between Dot vs Bracket Notation
Dot Notation	Bracket Notation
Easy to write	More flexible
Use when key is fixed	Use when key is dynamic
Example:

const key = "city";
console.log(person.key);      // undefined
console.log(person[key]);     // Mumbai

Bracket is useful when key comes from variable

 4. How to Add and Delete Properties?
a) Add property:
person.country = "India";
person["gender"] = "Male";
b) Delete property:
delete person.age;

5. How to check if a property exists?
 Method 1: in operator
console.log("name" in person); // true
Method 2: undefined check
console.log(person.age !== undefined);

6. What is Object.keys()?
 Returns all keys of an object as an array

console.log(Object.keys(person));
Output:
["name", "city", "country", "gender"]

7. What is Object.values()?
 Returns all values
console.log(Object.values(person));
Output:

["Shrinay", "Mumbai", "India", "Male"]
8. What is Object.entries()?
 Returns key + value pairs as arrays

console.log(Object.entries(person));
Output:
[
  ["name", "Shrinay"],
  ["city", "Mumbai"]
]

9. How to loop through an object?
 Method 1: for...in loop
for (let key in person) {
  console.log(key, person[key]);
}

Method 2: Using Object.keys()
Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});
 
Method 3: Using Object.entries() 
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}


*/