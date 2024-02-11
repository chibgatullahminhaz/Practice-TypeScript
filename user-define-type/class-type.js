/*
class create in typescript
class{
    propartise(like variable) ,constrantior,method(function)
}
*/
// way of one
var user = /** @class */ (function () {
    function user(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user.prototype.getData = function () {
        return "".concat(this.userName, ",").concat(this.age);
    };
    return user;
}());
var user1 = new user("chibgatullah", 20);
console.log(user1);
// way of two
var user2 = /** @class */ (function () {
    function user2(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user2.prototype.getData = function () {
        console.log("".concat(this.userName, ",").concat(this.age));
    };
    return user2;
}());
var user3 = new user2("minhaz", 21);
user3.getData();
