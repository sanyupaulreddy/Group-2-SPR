let number= Number(prompt("Enter a number: "))
for(let i=1;i<=number;i++){
    if(number%i==0){
    document.writeln(i+" is a factor of "+number+"<br>")
    }
}