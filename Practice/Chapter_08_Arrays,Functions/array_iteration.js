//Iterate -go from one to another

let tests =["login","checkout","search"];
for(let i=0;i<tests.length;i++)
{
    console.log(tests[i]);
}

console.log("------------------");

//for .....of loop [it gives value]
for (let test of tests)
{
    console.log(test);
}
console.log("----------------------------");
//For Each[no return value]

tests.forEach((test, index) => {
    console.log(`${index} : ${test}`);
}
);

console.log("----------------------------");

//enteries  -index +value

for (let [i, test] of tests.entries())
{
    console.log(i, test);
}
console.log("----------------------------");
// for...in  [it gives index]
let students =["neeti","senthil","ajay","rahul"]
for (let student in students)
{
    console.log(student +" =" + students[student]);
}