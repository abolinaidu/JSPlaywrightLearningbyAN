// Duplicate String 

let str="Hello World";
let duplicatestr="";
for(let  i=0;i<str.length;i++)
{
    duplicatestr+=str[i]+str[i];
}

console.log(duplicatestr);