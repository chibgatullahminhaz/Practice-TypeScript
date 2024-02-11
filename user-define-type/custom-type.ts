type user = {userName:string, userId:number}
let students:user[];
students =[]
let student1:user;
student1={
    userName:"chibgatullah",
    userId:101
}
let student2:user;
student2={
    userName:"sakib",
    userId:102
}
let student3:user;
student3={
    userName:"minhaz",
    userId:103
}
students.push(student1,student2,student3)
// console.log(students);


type userRequest = "GET" | "POST";
function errorHAldaling(requsest:userRequest){
console.log(requsest)
}
errorHAldaling("GET")