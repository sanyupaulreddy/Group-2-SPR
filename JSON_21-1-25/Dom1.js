let ele=document.createElement("h1");
ele.innerText="dynamic Element creation of HTML elements";

ele.setAttribute("id","demo");
console.log(ele);

document.body.appendChild(ele);

let image=document.createElement("img");
image.src='./page1-7-11.jpg';
console.log(image);
document.body.appendChild(image);

