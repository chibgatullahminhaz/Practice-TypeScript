export class user{
    userName:string;
    age:number;
        constructor(userName:string, age:number){
        this.userName=userName;
        this.age = age;

    }
    getData():void{
         console.log(`${this.userName},${this.age}`)
    }
}

export class students extends user{
     studentid:number;
    constructor(userName:string, age:number, studentid:number){
       super(userName,age)
       this.studentid = studentid;

    }
    getData(){
        console.log( `${this.userName},${this.age},student id : ${this.studentid}`)
    }
}

export let firstName:string = "chibgatullah";
export let lastName:string = "minhaz";

  export let studentName = ()=>{
    console.log(`${firstName},${lastName}, my Full name ${firstName + " "}${lastName}`)
}
studentName()