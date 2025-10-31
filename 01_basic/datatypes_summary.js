// Primitive data types in JavaScript
// 7 types: string, number, boolean, null, undefined, symbol, bigint


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123') //unique

console.log(id === anotherId) //false

const bigNumber = 1234567890123456789012345678901234567890n
console.log(bigNumber)



//Reference data types in JavaScript(Non-primitive data types)

//Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga']

let myObj =  { 
    Name : "Aman",
    age : 21,

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof score) //number
console.log(typeof isLoggedIn) //boolean
console.log(typeof outsideTemp) //object (bug)      

//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack vs Heap Memory

//Primitive data types are stored in Stack memory


    let a = 10;   // stored directly in stack
    let b = a;    // copy of a (separate value)
    b = 20;
    console.log(a); // 10 (not affected)
    console.log(b);

//Reference data types are stored in Heap memory    



    let userOne = {
        Name : "Rishu",
        Age : "23"
    }
    
    let userTwo = userOne; //userTwo stores the reference to userOne object in Heap memory
    userTwo.Age = "28";

    console.log(userOne.Age);
    console.log(userTwo.Age); 