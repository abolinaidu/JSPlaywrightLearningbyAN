class Encap{
    #child1;
    #child2;
    constructor(child1, child2){
        this.#child1 = child1;
        this.#child2 = child2;
    }  
    getName(){
        return this.#child1 + " " + this.#child2;
    } 
}

let p=new Encap("Shrinay", "Shrinu");
console.log(p.getName()); // This will work because getName() is a public method.
    

