// object definde
let students:object;
students = {
    userName:"minhaz",
    userid: 3
}

// optional symble (?)
let students1:{userName:string,id?:number}
students1 = {
    userName:"chibgatullah",
    id: 2
};
let allStudenst =[]
allStudenst.push(students1);
allStudenst.push(students);

console.log(allStudenst)
