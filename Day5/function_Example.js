// Without parameters
//Regular Function
function demo(){
    console.log("Object is executing");
    }
demo();

function add(a,b){
    console.log(a);
    console.log(b);
    document.writeln(a+b);
}

add(1,2);

// function Addition(let a, let b){

// }   

//Function Expression
let x=function(){
    console.log("Anonymous is not executing but the variable is being executed");
   }
x();  
document.writeln("<br>"+x);


//Arrow Function
let f=()=>console.log("This is the arrow function");
f();
let y =a=>console.log(a);
y(6);
let ya =_=>console.log("This is the usage of underscroll");
ya();


//Implicit and Explicit returns
//Explicit
function sum(a,b){
    return a+b;
}
console.log(sum(8,2));

//Implicit
let m=(i,j)=>i+j;
console.log(m(2,3));


//! Higher Order Function and the callback function

function hof(aa){// Higher order Function
    return aa;
}
let xa =hof(function (){return "Callback Function"});
console.log(xa());

let ay= hof(function(){return "Callback Function"});//Callback Function
console.log(ay());


let users=["a","b","c","d"];
console.log(users);
users.map(function(user){console.log(user)});


// CLOSURE
var av=10;
let bv=45;
function xv(){
    var userv="Sanyu";
    let company="Google";
    const sal="123456789";
    console.log(userv);
    console.log(company);
    console.log(sal);
    console.log(av,bv);
}
xv();