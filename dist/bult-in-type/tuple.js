"use strict";
let user;
user = ["minhaz", 11];
user.push("chibgatullah", 12);
console.log(user);
// let arr:[number,string,number,string];
// arr = [1, 'a', 2, 'b'];
// console.log(arr)
// for(let i = 1 ; i<=100; i++){
//     arry.push(i)
// }
let arry1 = [];
let arry2 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        arry1.push(i);
    }
    else {
        arry2.push(i);
    }
}
console.log(arry1, arry2);
