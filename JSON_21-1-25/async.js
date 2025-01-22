// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// })

// console.log(40);
// console.log(50);

// setInterval(()=>{
//     document.write("SPR");
// },1500)

// let pr1=new Promise(()=>{});
// console.log(pr1);



//Promise//************************ */

let pr2=new Promise((resolve, reject)=>{
    resolve("Success");
});


pr2.then((res)=>{
    console.log(res);
})
pr2.finally(()=>console.log("final"))

let pr3=new Promise((resolve, reject)=>{
    reject("Failure");
});
pr3.catch(err=>console.log(err));
// console.log(pr3);
pr3
.then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(err=>console.log("Finally"))

console.log("END?")


//API FETCHING

function fetchUsers(){
   let response=fetch("https://jsonplaceholder.typicode.com/users");
//    xu.then(res=>res.json().then(data=>{

//    )})
response.then(res=>{
    
   return res.json().then(data=>{
    console.log(data);
   })
})
}
fetchUsers();