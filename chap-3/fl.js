// <1- for loop>

// for(let count=1; count<500; count++);{
//     console.log("apna coolege");
// }

let sum = 0
let n = prompt("enter the value of n");
n= Number.parseInt(n);
for(let i=0; i<n; i++){
    sum=sum+i;
}
console.log(" sum of first " + n + " nature number is  " +sum);