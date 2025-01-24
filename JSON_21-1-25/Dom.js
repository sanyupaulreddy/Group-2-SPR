// let element=document.getElementById("demo");
// element.innerHTML="DOM";
// console.log(element);

// let test = document.getElementById("test");
// test.innerText="Header"

// let ele = document.getElementsByClassName("test");
// ele[0].style.backgroundColor="green"
// console.log(ele);
// console.log(Array.isArray(ele));

///Spread operator: this operator is used take out each and every value from
///Original array and store it in one more array(pure array)


// let x=[...ele];
// x.map(element=>{
    // element.style.backgroundColor="tomato";
//     ele[0].style.backgroundColor="darkorange"
//     ele[1].style.backgroundColor="darkorange"
//     ele[2].style.backgroundColor="white"
//     ele[3].style.backgroundColor="white"
//     ele[4].style.backgroundColor="green"
//     ele[5].style.backgroundColor="green"
//     ele[2].style.color="black";
//     ele[3].style.color="black";
//     element.style.color="white";
//     element.style.textTransform="Algerian";
// })

// let ele = document.getElementsByName("username");
// console.log(ele, Array.isArray(ele));

// let ele=document.querySelector("#demo");
// console.log(ele);

// let ele=document.querySelectorAll(".test");
// console.log(ele);

let demo=document.getElementById("demo");
demo.addEventListener("Click",()=>{
    console.log("Button Click")
})
