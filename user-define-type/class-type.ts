/* 
class create in typescript 
class{
    propartise(like variable) ,constrantior,method(function)
}
*/



// way of one

class user{
    userName:string;
    age:number;
        constructor(userName:string, age:number){
        this.userName= userName;
        this.age = age;

    }
    getData(){
        return `${this.userName},${this.age}`
    }
}

let user1 = new user("chibgatullah", 20)
console.log(user1)


// way of two

class user2{
    userName:string;
    age:number;
        constructor(userName:string, age:number){
        this.userName= userName;
        this.age = age;

    }
    getData(){
     console.log(`${this.userName},${this.age}`)
    }
}

let user3 = new user2("minhaz", 21);
user3.getData()