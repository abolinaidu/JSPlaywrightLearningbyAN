export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

let fname = "Shrinay"; // This is not exported. That's why you cannot import it into other classes. 
console.log(fname); // This will work here, but not in other files. 
