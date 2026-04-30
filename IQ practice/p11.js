//Count vowels and consonants in a String

let str="Hello World";
let vowels=0;
let consonants=0;

for(let i=0;i<str.length;i++)
{
    if(str[i].toLowerCase()=='a'||str[i].toLowerCase()=='e'||str[i].toLowerCase()=='i'||str[i].toLowerCase()=='o'||str[i].toLowerCase()=='u')
    {
        vowels++;
    }
    else if(str[i].toLowerCase()>='a' && str[i].toLowerCase()<='z')
    {
        consonants++;
    }
}
console.log("number of vowels:" +vowels);
console.log("number of consonants:" +consonants);