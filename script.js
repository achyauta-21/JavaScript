//Arrays
// an array is a special variable that holds multiple value in a single variable;


let fruits = ["apple","orange","mango"];
console.log(fruits);

//   Accesing element by index 
console.log( fruits[0]);
console.log(fruits[1]);

//  array length
console.log(fruits.length);

//  looping throught arrays
for(let i=0;i<fruits.length;i++){
console.log(fruits[i]);
}

// for each
console.log("hello")
 fruits.forEach(fruit => console.log(fruits));

 // push() add at the end
 fruits.push(3);
 console.log(fruits);

 // premove last
fruits.pop();
console.log(fruits);

 // remove first element
 fruits.shift();
 console.log(fruits);

 // add to begning
 fruits.unshift(4);
 console.log(fruits);

 // check if value exists
 console.log(fruits.includes(3));

 // convert to string

 let words=  ["javascript","is ","fun",1,2,1];
 console.log(words.join(" "));

 // map() = it creates a new array by applying a function to each element of the original array.

 // syntax = array.map(callback(element,index,array))

 let number = [1,2,3,4];
 let double = number.map(function(num){
    return num*2;

 })
console.log(double);

// filter() = function is used to pick only the item that match a condition from an array.
// it creates a new array with only the item that pass the test.

let ages =[12,17,18,19];
let adult = ages.filter(function(ages){
    return ages>17;
})
console.log(adult);


// let ram = [19 ,33,46,67];
// let sita = ram.filter(function(ram){
//     return ram>20;
// })
// console.log(sita);

 

let ram = [2,4,6,8];
let sita = ram.filter(ram => ram>2);
console.log(sita);

// reduce = function is used to combine all values in an array into a single value(product,sum,etc).
// it reduces the whole array to one final result.

// slice ,splice


console.log(`SPLICE AND SLICE`)
 let myarr = [0,1,2,3,4,5]
 console.log("A", myarr)

 let slice = myarr.slice(1,3)  // in the slice function the last index range is never included

console.log("B",slice)

 let splice = myarr.splice(0,3)
 console.log(myarr)
console.log("Cs",splice) // in the splice function the last index range is also include  an change in the original array
 console.log("end splice and slice")


 // concat operation

 let concat = ram.concat(ages)
 console.log("the concatr i",concat)

 // or
 // spread operator
 let spread  =  [...ram ,...ages]
 console.log(spread)