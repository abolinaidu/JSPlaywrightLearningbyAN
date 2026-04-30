//default export - only one default export is allowed in a module aand it will be called

export default function logger(message){
    console.log(message);
}   

export function log2(message)
{
    console.log("Log2: " + message);
}