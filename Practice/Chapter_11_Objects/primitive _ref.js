//Objects
//Objects are copied by reference, obj1 points to obj2, obj2 value is changed, obj1 value also get changed.
//object copied by ref,
//reference -object/array /function
//primitive -number,string,boolean,null,undefined 
let a=10;
let b=a;
b=99;
console.log(b);
console.log(a);
a=b;
console.log(a);   //value of a is changed


let obj1={val:10};
let obj2 =obj1;
console.log(obj2);
obj2.val=99;
console.log(obj1);