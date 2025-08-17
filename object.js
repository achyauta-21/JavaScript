// objects =  An object is a collection of key value pairs

let car= {
    brand:"tata",
    color:"red",
    speed:120
}
console.log(car);

// accesing object value
console.log(car.brand);

// adding or changing property
car.model  = "innova";
console.log(car);

// deleting a property
delete car.color;
console.log(car);

//  object with function
let person = {
    name : "priyanshu",
    age:34,
    greet: function(){
        console.log("hello" + this.name);
    }


};
console.log(person.greet());

// looping through an object
let student = {
    name:"priya",
    grade:"A",
    rollno:101
};
for(let key in student){
    console.log(key +":"+ student[key]);
}

// Arrays of object
let users = [
  { name: "Amit", age: 21 },
  { name: "Sneha", age: 22 }
];

console.log(users[0].name);   // Output: Amit
console.log(users[1].age);   