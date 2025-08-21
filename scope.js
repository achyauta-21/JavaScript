//  lets study scope 

let a = 10
var b = 40
const c =32

if(true)
{
let a = 100

var b = 403
const c =322 
console.log(a)
console.log(b)
console.log(c)
}

console.log(a)
console.log(b)
console.log(c)


// anything that is written inside the { } are called block scope and outside it is called global scope.

// function one(){
//     const username = "priyanshu"

//     function two(){
//         const website ="youtube"
//         console.log(username)
//     }
//     two()
// }
// one()