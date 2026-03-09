//Array accessing, modification,addition & removal

let statuses =["pass","fail","skip"];

console.log(statuses);
console.log(statuses.at(-1));


//modify

statuses [1] ="blocked";
console.log(statuses);
console.log(statuses.length);

// Add to end
let arr1= [1,2,3];
console.log(arr1);
arr1.push(4);
console.log(arr1);


//Remove from end

let arr2 = [1,2,3,4];
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.push(5,6,7,8);
arr2.pop(4); //removes the fourth and last element 
console.log(arr2);


//To add at the begining
arr2.unshift(0); //adds element at the start of array
console.log(arr2);

//To remove from begining
arr2.shift(); //removes 1st element from array
console.log(arr2);

//splice(start,deletecount...itemstoadd)

arr2.splice(2,1); //it will remove 1 element at the index 2.
console.log(arr2);
arr2.splice(2,0,99); //at index 2[2], remove nothing[0], and add 99
console.log(arr2);
arr2.splice(1,2,10,20,30);//at 1st index , delete 2 and 3 elements and replace it with 10,20,30
console.log(arr2);





