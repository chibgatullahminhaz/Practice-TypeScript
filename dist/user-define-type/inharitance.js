"use strict";
class user {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    getData() {
        console.log(`${this.userName},${this.age}`);
    }
}
class students extends user {
    constructor(userName, age, studentid) {
        super(userName, age);
        this.studentid = studentid;
    }
    getData() {
        console.log(`${this.userName},${this.age},student id : ${this.studentid}`);
    }
}
let user1 = new user("chibgatullah", 20);
user1.getData();
let student1 = new students("chibgatullah", 32, 3344444446765);
student1.getData();
