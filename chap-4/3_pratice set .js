//1)
let str ="har\"";
console.log(str.length);

//3)
let name = "JAY SRI KRISHNA";
console.log(name.toLowerCase());

// 4) 
let str1 = "please give rs 1000";
let amount =Number.parseInt (str1.slice(15));
console.log(amount)
console.log(typeof amount)

//5)
let friend = "suraj kumar"
friend[3]="r";
console.log(friend); // friend is not changed ,because  string is immutable. 