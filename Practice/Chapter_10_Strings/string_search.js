 //Searching  & checking

 let url = "https://staging.vwo.com/api/login?retry=true";

 //includes

 url.includes("staging");   //true
 url.includes("production");  //false

 //startswith or endswith

 url.startsWith("https");  //true
 url.startsWith("http://");  //false
 url.endsWith("true");   //true

 //indexOf and lastIndexOf

 console.log(url.indexOf("a"));
 console.log(url.lastIndexOf("a"));
 console.log(url.indexOf("nothere"));

 //regex - visit regex101.com

 console.log(url.search(/login/));