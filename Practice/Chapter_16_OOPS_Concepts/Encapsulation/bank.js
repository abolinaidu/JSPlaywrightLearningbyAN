class ICICI{
    #balance; // This is a private variable. It cannot be accessed outside the class.
    #name; // This is a private variable. It cannot be accessed outside the class.
    constructor(name, balance){
        this.#name = name;
        this.#balance = balance;
    }

    getBalance(){
        return this.#balance;
    }

    setBalance(balance,isCashier){
        if(isCashier){
            this.#balance = balance;
        } else{
            console.log("You are not authorized to set the balance.");
        }   
    }
}



let account1 = new ICICI("Shrinay", 1000);
console.log(account1.getBalance());
account1.setBalance(2000, false); // This will not work because the user is not a cashier.
console.log(account1.getBalance());
account1.setBalance(2000, true);
console.log(account1.getBalance());

let account2 = new ICICI("Shrinu", 5000);
console.log(account2.getBalance());
account2.setBalance(6000, false);       // This will not work because the user is not a cashier.
console.log(account2.getBalance());
account2.setBalance(6000, true);
console.log(account2.getBalance());


