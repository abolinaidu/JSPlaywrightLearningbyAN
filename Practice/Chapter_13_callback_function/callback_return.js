//
function calCulate(a,b,operation)
{
    return operation(a,b);
}
let sum=calCulate(10,5,function(x,y)
{
    return x+y;
});
console.log(sum);