var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user.prototype.getData = function () {
        console.log("".concat(this.userName, ",").concat(this.age));
    };
    return user;
}());
var students = /** @class */ (function (_super) {
    __extends(students, _super);
    function students(userName, age, studentid) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentid = studentid;
        return _this;
    }
    students.prototype.getData = function () {
        console.log("".concat(this.userName, ",").concat(this.age, ",student id : ").concat(this.studentid));
    };
    return students;
}(user));
var user1 = new user("chibgatullah", 20);
user1.getData();
var student1 = new students("chibgatullah", 32, 3344444446765);
student1.getData();
