let userDetails1 = {
    name : " Sanyu",
    age :19,
    address:{
        city:"Hanamakonda",
        area:"kazipet"
    }
}
console.log(userDetails1);
let ss=JSON.stringify(userDetails1);
console.log(ss , typeof(ss));

let rr=JSON.parse(ss);
console.log(rr);