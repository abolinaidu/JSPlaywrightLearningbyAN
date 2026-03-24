function makeCounter(start=0)
{
let count = start;  // this is variable is closed over
/*function increment()
    {
        count++;
    }
 function decrement()
    {
        count--;
    }
 function get()
    {
        return count;
    } 
    */
    return {
        increment() { count++;},
        decrement() { count--; },
        get() { return count; }
    }
}
let counter1 = makeCounter(0);
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.get());
counter1.decrement();
console.log(counter1.get());