class user{
    userName:string;
    age:number;
        constructor(userName:string, age:number){
        this.userName= userName;
        this.age = age;

    }
    getData():void{
         console.log(`${this.userName},${this.age}`)
    }
}

class students extends user{
     studentid:number;
    constructor(userName:string, age:number, studentid:number){
       super(userName,age)
       this.studentid = studentid;

    }
    getData(){
        console.log( `${this.userName},${this.age},student id : ${this.studentid}`)
    }
}

let user1 = new user("chibgatullah", 20)
user1.getData()

let student1 = new students("chibgatullah",32, 3344444446765)
student1.getData()

