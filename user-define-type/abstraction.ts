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

abstract class user2{
    userName:string;
    age:number;
        constructor(userName:string, age:number){
        this.userName= userName;
        this.age = age;

    }
    abstract getData():void
     
}

class students extends user2{
    userName: string; 
    age: number;
    studentId:number;
    constructor(userName:string, age:number,studentId:number){
      super(userName,age)
      this.studentId = studentId;
    }
    getData(): void {
        console.log(`my User Name:${this.userName}, my age : ${this.age},my student id : ${this.studentId} `)

    }
}

let studennt1 = new students("chibgatullah",22,3434353)
studennt1.getData()