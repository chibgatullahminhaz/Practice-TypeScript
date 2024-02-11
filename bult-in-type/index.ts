let firstName : string;
let lastName : string;
let fullName :string;
let isActivation:boolean;

firstName = "chibgatullah";
lastName = "minhaz";
fullName = firstName.concat(" " +lastName);
isActivation = true;

let result = `My First Name is ${firstName}, My Last Name is ${lastName}, My FullName is ${fullName}, my account activation is ${isActivation}`
console.log(result)