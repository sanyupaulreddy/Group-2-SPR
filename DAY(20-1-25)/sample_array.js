
let users=["Sanyu", "Pranav","Koushik","Rajju","Vasanth","Muzzu"];
let users1=["S", "P","K","R","V","M"];
for(let i=0;i<users.length;i++){
console.log(users[i]);
}

users1.map((user, i)=>{
    console.log(user, i)
})

users.forEach((usera, i) => {
    console.log(usera); 
});


let userDetails = {
    name : " Sanyu",
    age :19,
    address:{
        city:"Hanamakonda",
        area:"kazipet"
    }
}
console.log(userDetails)
console.log(userDetails.address)