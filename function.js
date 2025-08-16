// lets study function

console.log("function")

function sum(num1,num2){
let n3 = num1+num2
return n3
console.log("hello") // no statement will be ecxecuted after retur statement
}
 let res = sum(2,3)
console.log("return ",res)


function mul(n1,n2){ // pass the parameter
    console.log(n1*n2)

}

mul(3,2)  // pass the argument

// to add number of elements  in the cart
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(20,43,23,1,134,5,43))


// function to handle object


const user={
name:"priyanshu",
price:34

}
function handleObject(anyobject){
    console.log(`My name is ${anyobject.name} and the price is ${anyobject.price}`)
}

handleObject(user);


// to pass array in object

const myarr = [200,400,100,600];

function returnSecondValue(getarr){
    return getarr[3]
}
console.log(returnSecondValue(myarr))