"use strict";
let students;
students = [];
let student1;
student1 = {
    userName: "chibgatullah",
    userId: 101
};
let student2;
student2 = {
    userName: "sakib",
    userId: 102
};
let student3;
student3 = {
    userName: "minhaz",
    userId: 103
};
students.push(student1, student2, student3);
function errorHAldaling(requsest) {
    console.log(requsest);
}
errorHAldaling("GET");
