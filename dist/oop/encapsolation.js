"use strict";
class user2 {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    getData() {
    }
}
class students extends user2 {
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    getData() {
        console.log(`my User Name:${this.userName}, my age : ${this.age} `);
    }
    userData(numbrs) {
        console.log(this.studentId = numbrs);
    }
}
let student1 = new students("chibgatullah", 22, 3343);
student1.userData(3434);
student1.getData();
