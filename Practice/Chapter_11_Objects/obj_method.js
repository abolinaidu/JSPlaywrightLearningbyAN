const obj1 ={a:1,b:2,c:4};

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

const user ={ name:"john",age:30};

for (const key in user)
{
    console.log(`${key}: ${user[key]}`);
}

// Object.keys/values/entries
Object.keys(user).forEach(key => {
    console.log(key);
});

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});