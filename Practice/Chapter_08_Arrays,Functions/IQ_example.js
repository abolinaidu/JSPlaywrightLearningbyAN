let browser =["Edge","safari","opera","firefox","chrome"]
console.log(browser);

browser.pop();
console.log(browser);

console.log("--------------TTA---------------");

let remove= browser.shift();
console.log(browser);
console.log(remove);
console.log("--------------TTA---------------");
for (let i=0;i<browser.length;i++)
{
    console.log(browser[i]);
   if(browser[i]==="opera")
    {
        console.log("Opera is removed");
    }
}