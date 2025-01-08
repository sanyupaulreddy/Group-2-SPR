let num=Number(prompt("Enter a number of our choice: "));
let prod=1;
for(let i=1;i<=num;i++){
    prod=prod*i
}
document.writeln("The factorial of the number "+num+" is : "+prod)