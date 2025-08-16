// use of this keyword

 const user = {
    username :"priya",
price:999,
 welcome:function(){
console.log(`${this.username},welcome`)
 }
 }
user.welcome()

username = "achyauta"
console.log(`${this.username}, welcome`)


// this keyword cannot be used in the function

//  const chai  = function user1(){
//     let usernm = "priyanshu",
//     console.log(this)
// }
// user1()

const chai2 = ()=>{
let username1 = "username"
console.log(this)

}
chai2()