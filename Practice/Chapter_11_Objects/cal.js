const calculator ={
    value:0,
    add(n) {
        this.value+=n;   //0+5
        return this.value;   //own value
    },
    substract(n)
    {
        this.value -=n;
        return this.value;
    }
}
//value of n become 5 
console.log(calculator.add(5));
console.log(calculator.substract(5));


console.log(calculator.add(6).calculator.substract(8));