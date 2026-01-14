//In the const they do not change the value 
const w =10; //inmutable
console.log(w)
document.writeln(w)

// In scope var can be changes and hences the var can not used
let h=10 //mutable
var j =20
{
    let h=40
    var j=50
    console .log(h)
    document.writeln(h)
    console.log(j)
    document.writeln(j)
}
console.log(h)
document.writeln(h)
console.log(j)
document.writeln(j)

//variables

//primitive type variables

//1 number
let s=89

console.log(s)
document.writeln(s)
console.log(typeof(s))

//2 string
let f="navin"
console.log(f)
document.writeln(f)
console.log(typeof(f))

// 3  null

let data =null
console.log(typeof(data))




//activite 1 student info

let name= "prasenjeet kamble"
console.log(name)
document.writeln(name)

let roll_number=46
console.log(roll_number)
document.writeln(roll_number)

let email="parsenjeetkamle2005@gamil.com"
console.log(email)
document.writeln(email)

let modile_no=1233465766
console.log(modile_no)
document.writeln(modile_no)

// //activite 2 odd even

 let p=27

if (p%2==0){
    console.log("even")
    document.writeln("even")
}
else
{
    console.log("odd")
    document.writeln("odd")
}

// //Activity 3 
let a = 10;

for (let i = 0; i <= a; i++) {
    console.log(i);
    document.writeln(i)
}   


// //Activity 4

let m=35;

if(m<=35){
    console.log("pass")
    document.writeln("pass")
}
else{
    console.log("fail")
    document.writeln("fail")
}

//Activity 5

let b=10
let c=b
b=45
console.log(b)
document.writeln("b")
console.log(c)
document.writeln("c")