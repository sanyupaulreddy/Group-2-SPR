// let ele=document.createElement("h1");
// ele.innerText="dynamic Element creation of HTML elements";

// ele.setAttribute("id","demo");
// console.log(ele);

// document.body.appendChild(ele);

// let image=document.createElement("img");
// image.src='./page1-7-11.jpg';
// console.log(image);
// document.body.appendChild(image);

// let mainEle=document.createElement("div");
// mainEle.setAttribute("id","mainBlock");

// console.log(mainEle);

// let topEle=document.createElement("div");
// topEle.setAttribute("class", "topBlock");

// let image=document.createElement("img");
// image.src="./Myimage.jpg"
// image.width="300";
// image.height='300';
// image.style.objectFit="cover";

// let bottomEle=document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");
// let h1=document.createElement("h1");
// h1.innerText="IMAGE";

// let btn=document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle);

let form=document.querySelector("form");
let username=document.getElementById("uName");
let password=document.getElementById("uPass");
let check=document.getElementById("check");
let show=document.getElementById("show");

let gender=document.getElementsByName("gender");

check.addEventListener("click",(event)=>{
    console.log(event.target.checked);
    if(event.target.checked==true){
        password.setAttribute("type","text");
        show.innerText="Hide Password";
    }else{
        password.setAttribute("type","password");
        show.innerText="Show Password"
    }
})
form.addEventListener("submit", event=>{
    event.preventDefault();
    let un=username.value;
    let up=password.value;
    let gen="";

    for(let i=0;i<=gender.length-1;i++){
        if(gender[i].checked == true){
            gen +=gender[i].value;
        }
    };
    let userDetails={
        username:un,
        password:up,
        Gender:gen
    }
    console.log(userDetails);
})
