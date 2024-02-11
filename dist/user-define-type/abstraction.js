"use strict";
// /* 
// class create in typescript 
// class{
//     propartise(like variable) ,constrantior,method(function)
// }
// */
// // way of one
// abstract class user{
//     userName:string;
//     age:number;
//         constructor(userName:string, age:number){
//         this.userName= userName;
//         this.age = age;
//     }
//     abstract getData():void
// }
// way of two
class user2 {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class students extends user2 {
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    getData() {
        console.log(`my User Name:${this.userName}, my age : ${this.age},my student id : ${this.studentId} `);
    }
}
let studennt1 = new students("chibgatullah", 22, 3434353);
studennt1.getData();
