"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentName = exports.lastName = exports.firstName = exports.students = exports.user = void 0;
class user {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    getData() {
        console.log(`${this.userName},${this.age}`);
    }
}
exports.user = user;
class students extends user {
    constructor(userName, age, studentid) {
        super(userName, age);
        this.studentid = studentid;
    }
    getData() {
        console.log(`${this.userName},${this.age},student id : ${this.studentid}`);
    }
}
exports.students = students;
exports.firstName = "chibgatullah";
exports.lastName = "minhaz";
let studentName = () => {
    console.log(`${exports.firstName},${exports.lastName}, my Full name ${exports.firstName + " "}${exports.lastName}`);
};
exports.studentName = studentName;
(0, exports.studentName)();
