const obj1 ={a:1,b:2};
const obj2 ={c:3,d:4};

const copy ={...obj1};
console.log(copy);

const merger ={...obj2,...obj1};
console.log(merger);

//this keyword


//getter /setter
const user = {
firstName :"Pramod",
lastName :"Dutta",

get fullName()
{
   return this.firstName+this.lastName;

},
set fullName(value)
{
[this.firstName,this.lastName] = value.split(" ");
}
};


console.log(user.fullName);
user.fullName="Amit Sharma";
console.log(user.fullName);
