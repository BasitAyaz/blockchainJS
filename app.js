// === var ===
// block scope (n)
// reinitializable (y)
// reassigning (y)
// hoisiting (y)

// === let ===
// block scope (y)
// reinitialize (n)
// reassigning (y)
// hoisiting (y)

// === const ===
// block scope (y)
// reinitialize (n)
// reassigning (n)
// hoisiting (y)

// abc()
// function abc(){
//     console.log("abc")
// }

// function abc(){
//     var a = "abc"
// }
// console.log(a)

// var a = "abc"
// console.log(a)
// if(true){
//     var a = "abc"
// }
// console.log(a)
// var a = "abc"
// var a = 123
// console.log(a)

// var a = "abc"
// a = 123
// console.log(a)

// var a = "abc"
// console.log(a)

// console.log(b)
// let b = "abc"

// let b = "abc"
// console.log(b)
// if(true){
//     let a = "abc"
// }
// console.log(a)
// let b = "abc"
// let b = 123
// console.log(b)

// let a = "abc"
// a = 123
// console.log(a)

// if(true){
//     const a = "abc"
// }
// console.log(a)
// const c = "abc"
// const c = 123
// console.log(c)

// const c = "abc"
// console.log(c)
// const a = "abc"
// a = 123
// console.log(a)

// console.log(c)
// const c = "abc"

// let std1 = {
//     name:"Ali",
//     age:18,
//     contact:"123456"
// }
// std1.inst = "SAIMS"
// std1.name = "abc"
// delete std1.age

// console.log(std1)

// ================= Template Literals ================

// let a = 2
// console.log(`Person age is ${a}`)
// console.log(`the square of ${a} is ${a*a}`)

// ================= Ternary Operator ================

// if(false){
//     console.log("true Condition")
// }else{
//     console.log("false Condition")
// }

// false ? console.log("true Condition") : console.log('false condition')
// 10 != 10 ? console.log("true Condition") : console.log('false condition')

// let age = 20;
// let studentCard = false
// age == 18
//   ? console.log("allow")
//   : studentCard == true
//   ? console.log("allow on student Card")
//   : console.log("not Allow");

// ================= Spread Operators ================

// let obj1 = {
//     name:'abc',
//     age:18
// }

// let obj2 = {
//     inst:'SAIMS',
//     marks:80,
//     ...obj1
// }

// let obj3 = {
//     ...obj2,
//     categor:"A"
// }
// console.log(obj3)

// let a = [1,2,3]
// let b = ['a','b','c',...a]

// console.log(b)

// ================= Destructuring ================

// let a = ["a", "b", "c", "d"];

// let b = a[2];
// let c = a[3];
// let e = a[0];
// function abc(a){
//     return [a]
// }

// let [thirdVal] = abc("abc");
// console.log(thirdVal)

// let obj = {
//     name:'abc',
//     age:18,
//     contact:'0441324'
// }

// let {contact,name,age} = obj

// console.log(contact)
// console.log(name)
// console.log(age)

// ================= Functions ================
// function abc(){
//     console.log('abc')
// }
// abc()

// let a = function(){
//     console.log("abc")
// }
// a()

// let a = a =>{
//     console.log(a)
// }

// a("abc123")

// let a = b("abc");
// console.log(a)

// let b = a => a;
// let a = (e)=>{
//     console.log(e)
// }

// a(b('abcs'))

// let a = ()=>{
//     console.log('main')
//     return ()=>{
//         console.log('nested')
//     }
// }

// let b = a()
// b()

// ================= Array Functions ================

// map
// filter
// find
// findIndex
// some
// foreach
let a = [
    {
        name:'Abdul Basit',
        age:18,
        id:1,
        category:'A',
        isChecked:false
    },
    {
        name:'Muhammad Zaid',
        age:18,
        id:2,
        category:'A',
        isChecked:false
    },
    {
        name:'Muhammad Ali',
        age:18,
        id:3,
        category:'B',
        isChecked:false
    },
    {
        name:'Muhammad Haris',
        age:18,
        id:4,
        category:'B',
    },
    {
        name:'Muhammad Zohaib',
        age:18,
        id:5,
        category:'C',
        isChecked:false
    },
]
// let b = a.map((e)=>{
//     console.log(e)
//     return e
// })

// console.log(b)


// let b =  a.filter(x=>x.category == "A")
// console.log(b)

a.forEach(x=>{
    x.inst = "SAIMS"
    delete x.name
})
console.log(a)


let obj = a.find(x=>x.name == "Muhammad Ali")
console.log(obj)

let status = a.some(x=>x.isChecked)
console.log(status)

let ind = a.findIndex(x=>x.id == 12)
console.log(ind)










