
 class user2{
    public userName:string;
    age:number;
        constructor(userName:string, age:number){
        this.userName= userName;
        this.age = age;

    }
     getData():void{

     }
     
}

class students extends user2{
     userName: string; 
    age: number;
    private studentId:number;
    constructor(userName:string, age:number,studentId:number){
      super(userName,age)
       this.studentId = studentId;
    }
    getData(): void {
        console.log(`my User Name:${this.userName}, my age : ${this.age} `)
    }
    userData(numbrs:number){
    console.log(this.studentId = numbrs)
    }
}

let student1 = new students("chibgatullah",22,3343)
student1.userData(3434)
student1.getData()