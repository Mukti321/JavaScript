

let b = prompt("Hey whats you age?");
b = Number.parseInt(b); // Converting the string to a number
if(b<0){
  alert("This is an invalid age");
}
else if(b<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(b<18 && b>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")

console.log("You can", (b<18? "not drive" :"drive"))